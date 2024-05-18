import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductEntity } from './entities'
import { Between, ILike, Or, Repository } from 'typeorm'
import {
	CreateProductDto,
	ImageDto,
	ProductAllQueryDto,
	SearchProductDto,
	UpdateProductDto
} from './dto'
import { FileService } from '@/core/file/file.service'
import { CharacteristicEntity } from '../characteristic/entities'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productRepository: Repository<ProductEntity>,
		private readonly fileService: FileService
	) {}

	async create(dto: CreateProductDto, images: Express.Multer.File[]) {
		const orderUrls = images.map((image, index) => ({ image, index }))

		const albumsObj = await Promise.all(
			orderUrls.map(async imgObj => {
				return {
					index: imgObj.index,
					url: await this.fileService.uploadFile(imgObj.image)
				}
			})
		)
		const albums = albumsObj.sort((a, b) => a.index - b.index).map(imgObj => imgObj.url)

		let chars = []
		if (dto.characteristics?.length) {
			chars = dto.characteristics.map(char => CharacteristicEntity.of(char))
		}
		const product = this.productRepository.create({
			...dto,
			images: albums,
			characteristics: chars
		})
		return await this.productRepository.save(product)
	}

	async getOne(id: number) {
		const product = await this.productRepository.findOne({
			where: { id },
			relations: {
				characteristics: true
			}
		})

		if (!product) throw new NotFoundException(`Товар с id: ${id} не найден`)
		return product
	}
	async getAll({ count, page, sortBy, sortOrder, price, filters }: ProductAllQueryDto) {
		const where = {}
		if (price) {
			const sortedPrice = price.sort()
			where['price'] = Between(sortedPrice[0], sortedPrice[1])
		}
		if (filters) {
			const array = []
			for (const key in filters) {
				const object = {
					key: ILike(key),
					value: Or(...filters[key].map(ILike))
				}
				array.push(object)
			}

			where['characteristics'] = array
		}
		const [products, total] = await this.productRepository.findAndCount({
			order: {
				[sortBy]: sortOrder
			},
			where,
			take: count,
			skip: skipCount(page, count)
		})
		return new PaginationDto(products, total)
	}

	async update(id: number, dto: UpdateProductDto) {
		const product = await this.byId(id, true)
		return await this.productRepository.save({ ...product, ...dto })
	}

	async deleteImages(id: number, dto: ImageDto) {
		const product = await this.byId(id, true)
		dto.images.forEach(url => {
			if (!product.images.includes(url)) {
				throw new BadRequestException(`Файл ${url} в товаре с id: ${id} не найден`)
			}
			product.images = product.images.filter(img => img !== url)
		})

		await this.productRepository.save(product)
		Promise.all(dto.images.map(async url => await this.fileService.deleteFile(url)))
		return
	}

	async addImages(id: number, images: Express.Multer.File[]) {
		const product = await this.byId(id, true)
		const orderUrls = images.map((image, index) => ({ image, index }))

		const albumsObj = await Promise.all(
			orderUrls.map(async imgObj => {
				return {
					index: imgObj.index,
					url: await this.fileService.uploadFile(imgObj.image)
				}
			})
		)
		const albums = albumsObj.sort((a, b) => a.index - b.index).map(imgObj => imgObj.url)

		product.images = [...product.images, ...albums]
		return await this.productRepository.save(product)
	}

	async delete(id: number) {
		await this.byId(id, true)
		await this.productRepository.delete({ id })
		return
	}

	async byId(id: number, withError = false) {
		const product = await this.productRepository.findOneBy({ id })

		if (!product && withError) {
			throw new NotFoundException(`Товар с id: ${id} не найден`)
		}
		return product
	}

	async search({ count, page, query }: SearchProductDto) {
		const like = ILike(`%${query}%`)
		const [products, total] = await this.productRepository.findAndCount({
			where: [{ brand: like }, { type: like }, { description: like }, { name: like }],
			take: count,
			skip: skipCount(page, count)
		})
		return new PaginationDto(products, total)
	}
}
