import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateOrderDto, OrderAllQueryDtoWithUser } from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { OrderEntity, OrderItemEntity } from './entities'
import { Repository } from 'typeorm'
import { ProductService } from '../product/product.service'
import { PaginationDto } from '@/common/pagination'
import { skipCount } from '@/core/utils'

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(OrderEntity)
		private readonly orderRepository: Repository<OrderEntity>,
		@InjectRepository(OrderItemEntity)
		private readonly orderItemRepository: Repository<OrderItemEntity>,
		private readonly productService: ProductService
	) {}

	async create(dto: CreateOrderDto, userId: number) {
		const productIds = dto.products.map(prod => prod.id)
		const products = await this.productService.getByIds(productIds)
		let total = 0
		const orderItems = dto.products.map(product => {
			const { price } = products.find(p => p.id === product.id)
			const count = product.count
			total += count * price
			return this.orderItemRepository.create({
				count,
				price,
				product: { id: product.id }
			})
		})
		const order = this.orderRepository.create({
			items: orderItems,
			total,
			user: { id: userId }
		})
		return await this.orderRepository.save(order)
	}

	async findAll({ count, page, sortBy, sortOrder, user }: OrderAllQueryDtoWithUser) {
		const where = {}

		user ? (where['user'] = { id: user }) : {}

		const [items, total] = await this.orderRepository.findAndCount({
			where,
			order: {
				[sortBy]: sortOrder
			},
			take: count,
			skip: skipCount(page, count),
			relations: {
				user: true,
				items: {
					product: true
				}
			},
			select: {
				user: {
					id: true,
					email: true,
					name: true,
					role: true
				}
			}
		})

		return new PaginationDto(items, total)
	}

	async findOne(id: number, userId?: number) {
		const order = await this.orderRepository.findOne({
			where: userId ? { user: { id: userId } } : {},
			relations: {
				items: {
					product: true
				},
				user: true
			},
			select: {
				user: {
					id: true,
					email: true,
					name: true,
					role: true
				}
			}
		})
		if (!order) {
			throw new NotFoundException(`Заказ с id: ${id} не найден`)
		}
		return order
	}

	async delete(id: number) {
		const order = await this.orderRepository.findOneBy({ id })
		if (!order) {
			throw new NotFoundException(`Заказ с id: ${id} не найден`)
		}
		await this.orderRepository.delete({ id })
	}
}
