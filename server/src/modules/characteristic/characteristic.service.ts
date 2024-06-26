import {
	BadRequestException,
	Inject,
	Injectable,
	NotFoundException,
	forwardRef
} from '@nestjs/common'
import {
	CharacteristicAllQueryDto,
	CreateCharacteristicWithProductDto,
	UpdateCharacteristicDto,
	UpdateInProductDto
} from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CharacteristicEntity } from './entities'
import { In, Repository } from 'typeorm'
import { ProductService } from '../product/product.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'

import { DataBaseService } from '@/core/database/database.service'
@Injectable()
export class CharacteristicService {
	constructor(
		@InjectRepository(CharacteristicEntity)
		private readonly characteristicRepository: Repository<CharacteristicEntity>,
		@Inject(forwardRef(() => ProductService))
		private readonly productService: ProductService,
		private readonly databaseService: DataBaseService
	) {}
	async create(dto: CreateCharacteristicWithProductDto) {
		await this.productService.byId(dto.product, true)
		const characteristic = this.characteristicRepository.create({
			...dto,
			product: { id: dto.product }
		})
		return await this.characteristicRepository.save(characteristic)
	}

	async findAll({ count, page, product }: CharacteristicAllQueryDto) {
		const where = {}
		product ? (where['product'] = { id: product }) : {}

		const [products, total] = await this.characteristicRepository.findAndCount({
			order: {},
			where,
			take: count,
			skip: skipCount(page, count)
		})
		return new PaginationDto(products, total)
	}

	async findOne(id: number) {
		const characteristic = await this.characteristicRepository.findOne({
			where: { id },
			relations: {
				product: true
			}
		})
		if (!characteristic) throw new NotFoundException(`Характеристика с id: ${id} не найдена`)
		return characteristic
	}

	async update(id: number, dto: UpdateCharacteristicDto) {
		const characteristic = await this.findOne(id)
		return await this.characteristicRepository.save({
			...characteristic,
			...dto
		})
	}

	async delete(id: number) {
		await this.byId(id, true)
		await this.characteristicRepository.delete({ id })
		return
	}

	async byId(id: number, withError = false) {
		const characteristic = await this.characteristicRepository.findOneBy({ id })

		if (!characteristic && withError) {
			throw new NotFoundException(`Характеристика с id: ${id} не найдена`)
		}
		return characteristic
	}

	async deleteMany(ids: number[]) {
		const products = await this.getByIds(ids)
		await this.characteristicRepository.remove(products)
	}

	async updateForProduct(dto: UpdateInProductDto[], productId: number) {
		return this.databaseService.transaction(async queryRunner => {
			await this.deleteByProductId(productId)

			const createdCharacheristic = dto.map(data => {
				const char = this.characteristicRepository.create({
					key: data.key,
					value: data.key,
					product: {
						id: productId
					}
				})
				return char
			})

			createdCharacheristic.forEach(async char => {
				await queryRunner.manager.save(CharacteristicEntity, char)
			})

			return createdCharacheristic
		})
	}

	async deleteByProductId(product: number) {
		await this.characteristicRepository.delete({ product: { id: product } })
	}

	async getByIds(ids: number[]) {
		const characteristics = await this.characteristicRepository.find({
			where: { id: In(ids) }
		})

		const errorMessages = []

		ids.forEach(id => {
			const characteristic = characteristics.some(g => g.id === id)
			if (!characteristic) {
				errorMessages.push(`Характеристика с id: ${id} не найден`)
			}
		})

		if (errorMessages.length) {
			throw new BadRequestException(errorMessages)
		}

		return characteristics
	}
}
