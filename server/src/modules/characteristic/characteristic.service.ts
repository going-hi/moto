import { Injectable, NotFoundException } from '@nestjs/common'
import {
	CharacteristicAllQueryDto,
	CreateCharacteristicWithProductDto,
	UpdateCharacteristicDto
} from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CharacteristicEntity } from './entities'
import { Repository } from 'typeorm'
import { ProductService } from '../product/product.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'

@Injectable()
export class CharacteristicService {
	constructor(
		@InjectRepository(CharacteristicEntity)
		private readonly characteristicRepository: Repository<CharacteristicEntity>,
		private readonly productService: ProductService
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
}
