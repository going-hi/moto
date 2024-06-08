import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateOrderDto, DeleteManyOrdersDto, OrderAllQueryDto } from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { OrderEntity, OrderItemEntity } from './entities'
import { In, Repository } from 'typeorm'
import { ProductService } from '../product/product.service'
import { PaginationDto } from '@/common/pagination'
import { skipCount } from '@/core/utils'
import { EOrderStatus } from '@/common/enums'
import { selectUserDto } from '../user/dto'
import { AddCountOrders } from '../product/dto'
import { BasketService } from '../basket/basket.service'

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(OrderEntity)
		private readonly orderRepository: Repository<OrderEntity>,
		@InjectRepository(OrderItemEntity)
		private readonly orderItemRepository: Repository<OrderItemEntity>,
		private readonly productService: ProductService,
		private readonly basketService: BasketService
	) {}

	async create(dto: CreateOrderDto, userId: number) {
		const productIds = dto.products.map(prod => prod.id)
		const products = await this.productService.getByIds(productIds)
		let total = 0
		const arrayOrdersCount: AddCountOrders[] = []
		const orderItems = dto.products.map(product => {
			const { price } = products.find(p => p.id === product.id)
			const count = product.count
			arrayOrdersCount.push({ id: product.id, count: product.count })
			total += count * price
			return this.orderItemRepository.create({
				count,
				price,
				product: { id: product.id }
			})
		})
		await this.productService.addCountOrders(arrayOrdersCount)
		const order = this.orderRepository.create({
			...dto,
			items: orderItems,
			total,
			user: { id: userId }
		})
		const savedOrder = await this.orderRepository.save(order)
		await this.basketService.clearByUserId(userId)
		return savedOrder
	}

	async findAll({ count, page, sortBy, sortOrder, user, status }: OrderAllQueryDto) {
		const where = {}
		user ? (where['user'] = { id: user }) : {}
		status ? (where['status'] = status) : {}
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
				user: selectUserDto
			}
		})

		return new PaginationDto(items, total)
	}

	async findOne(id: number, userId?: number) {
		const where = { id }

		userId ? (where['user'] = { id: userId }) : {}

		const order = await this.orderRepository.findOne({
			where,
			relations: {
				items: {
					product: true
				},
				user: true
			},
			select: {
				user: selectUserDto
			}
		})
		if (!order) {
			throw new NotFoundException(`Заказ с id: ${id} не найден`)
		}
		return order
	}

	async byId(id: number, withError = false) {
		const order = await this.orderRepository.findOneBy({ id })

		if (!order && withError) {
			throw new NotFoundException(`Заказ с id: ${id} не найден`)
		}
		return order
	}

	async delete(id: number) {
		await this.byId(id, true)
		await this.orderRepository.delete({ id })
	}

	async updateStatus(id: number, status: EOrderStatus) {
		const order = await this.byId(id, true)
		order.status = status
		return await this.orderRepository.save(order)
	}

	async getByIds(ids: number[]) {
		const orders = await this.orderRepository.find({
			where: { id: In(ids) }
		})

		const errorMessages = []

		ids.forEach(id => {
			const order = orders.some(g => g.id === id)
			if (!order) {
				errorMessages.push(`Заказ с id: ${id} не найден`)
			}
		})

		if (errorMessages.length) {
			throw new BadRequestException(errorMessages)
		}

		return orders
	}

	async deleteMany({ filters: { ids } }: DeleteManyOrdersDto) {
		const orders = await this.getByIds(ids)
		await this.orderRepository.remove(orders)
	}
}
