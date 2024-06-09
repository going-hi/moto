import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductEntity } from './entities'
import { Between, ILike, In, Or, Repository } from 'typeorm'
import {
	CreateProductDto,
	FilterDto,
	ImageDto,
	ProductAllQueryDto,
	SearchProductDto,
	UpdateProductDto,
	AddCountOrders,
	GetManyProductsDto,
	DeleteManyProductsDto
} from './dto'
import { FileService } from '@/core/file/file.service'
import { CharacteristicEntity } from '../characteristic/entities'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'
import * as filterData from './dto/filter.json'
import { JwtPayload } from '@/auth/dto'
import { FavouritesService } from '../favourites/favourites.service'
import { productGenerate } from '@/core/seeder/generate'
import { CharacteristicService } from '../characteristic/characteristic.service'

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productRepository: Repository<ProductEntity>,
		private readonly fileService: FileService,
		private readonly favouritesService: FavouritesService,
		private readonly characteristicService: CharacteristicService
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

	async update(id: number, dto: UpdateProductDto, newImages?: Express.Multer.File[]) {
		const product = await this.byId(id, true)

		const albums = product.images.filter(img => dto.images.includes(img))

		const unnecessaryImgs = product.images.filter(img => !albums.includes(img))
		unnecessaryImgs.forEach(img => this.fileService.deleteFile(img))

		if (newImages || newImages.length) {
			const orderUrls = newImages.map((image, index) => ({ image, index }))

			const albumsObj = await Promise.all(
				orderUrls.map(async imgObj => {
					return {
						index: imgObj.index,
						url: await this.fileService.uploadFile(imgObj.image)
					}
				})
			)

			const sortedAlbum = albumsObj
				.sort((a, b) => a.index - b.index)
				.map(imgObj => imgObj.url)

			albums.push(...sortedAlbum)
		}

		if (dto.characteristics.length) {
			dto['characteristics'] = await this.characteristicService.updateMany(
				dto.characteristics
			)
		}

		return await this.productRepository.save({
			...product,
			...dto,
			images: albums
		})
	}

	async getOne(id: number, user: JwtPayload | null) {
		const product = await this.productRepository.findOne({
			where: { id },
			relations: {
				characteristics: true
			}
		})
		if (!product) throw new NotFoundException(`Товар с id: ${id} не найден`)
		let arrayIsLikeProducts = []
		if (user) {
			arrayIsLikeProducts = await this.getIsLikeProducts([id], user.id)
		}

		const isLike = arrayIsLikeProducts.length
			? arrayIsLikeProducts.find(obj => obj.id === product.id).isLike
			: false
		product['isLike'] = isLike

		return product
	}
	async getAll(
		{ count, page, sortBy, sortOrder, price, filters, category, type, q }: ProductAllQueryDto,
		user?: JwtPayload | null
	) {
		const where = {}
		if (price) {
			const sortedPrice = price.sort((a, b) => a - b)
			where['price'] = Between(sortedPrice[0], sortedPrice[1])
		}
		if (filters) {
			const brands = filters['бренд']
			if (brands) {
				where['brand'] = brands.length > 1 ? Or(...brands.map(ILike)) : ILike(brands[0])

				delete filters['бренд']
			}
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

		category ? (where['category'] = category) : {}
		type ? (where['type'] = type) : {}
		q ? (where['name'] = ILike(`%${q}%`)) : {}

		const [products, total] = await this.productRepository.findAndCount({
			order: {
				[sortBy]: sortOrder
			},
			where,
			take: count,
			skip: skipCount(page, count)
		})

		let arrayIsLikeProducts = []
		if (user) {
			const ids = products.map(product => product.id)
			arrayIsLikeProducts = await this.getIsLikeProducts(ids, user.id)
		}
		for (const product of products) {
			const isLike = arrayIsLikeProducts.length
				? arrayIsLikeProducts.find(obj => obj.id === product.id).isLike
				: false
			product['isLike'] = isLike
		}
		return new PaginationDto(products, total)
	}

	async getMany({ filters: { ids } }: GetManyProductsDto) {
		const [products, total] = await this.productRepository.findAndCount({
			where: {
				id: In(ids)
			}
		})

		return new PaginationDto(products, total)
	}

	async getIsLikeProducts(productIds: number[], userId: number) {
		const favorites = await this.favouritesService.getByUser(userId)
		const favoritesProduct = favorites.map(fav => fav.product.id)

		const array = []
		for (const id of productIds) {
			array.push({
				id,
				isLike: favoritesProduct.includes(id)
			})
		}
		return array
	}

	async addCountOrders(dto: AddCountOrders[]) {
		try {
			dto.forEach(async data => {
				const product = await this.byId(data.id)
				await this.productRepository.save({
					...product,
					countOrders: product.countOrders + data.count
				})
			})
		} catch (e) {
			return null
		}
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

	async deleteMany({ filters: { ids } }: DeleteManyProductsDto) {
		const products = await this.getByIds(ids)

		products.forEach(async product => {
			product.images.forEach(img => {
				this.fileService.deleteFile(img)
			})
		})
		await this.productRepository.remove(products)
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

	async getByIds(ids: number[]) {
		const products = await this.productRepository.find({
			where: { id: In(ids) }
		})

		const errorMessages = []

		ids.forEach(id => {
			const product = products.some(g => g.id === id)
			if (!product) {
				errorMessages.push(`Товар с id: ${id} не найден`)
			}
		})

		if (errorMessages.length) {
			throw new BadRequestException(errorMessages)
		}

		return products
	}

	async getFilter({ type, category }: FilterDto) {
		const filterCategory = filterData[category]

		if (filterCategory?.common) {
			const price = await this.intervalPrice(category)
			filterCategory['char']['цена'] = price
			return filterCategory['char']
		}
		const price = await this.intervalPrice(category, type)
		const filterType = filterCategory[type]
		if (!filterType) throw new NotFoundException()
		filterType['цена'] = price
		return filterCategory[type]
	}

	async intervalPrice(category: string, type?: string) {
		const queryMax = this.productRepository
			.createQueryBuilder('p')
			.select('MAX(p.price)', 'max')
			.where('category = :category', { category })

		const queryMin = this.productRepository
			.createQueryBuilder('p')
			.select('MIN(p.price)', 'min')
			.where('category = :category', { category })

		let min = 0
		let max = 100000000
		if (type) {
			max = (await queryMax.andWhere('type = :type', { type }).getRawOne()).max || max
			min = (await queryMin.andWhere('type = :type', { type }).getRawOne()).min || min
		} else {
			max = (await queryMax.getRawOne()).max || max
			min = (await queryMin.getRawOne()).min || min
		}

		return [min, max]
	}

	async _seeding(count: number = 10) {
		const products = []
		for (let i = 0; i < count; i++) {
			const newProduct = productGenerate()
			products.push(newProduct)
		}
		await this.productRepository.save(products)
	}
}
