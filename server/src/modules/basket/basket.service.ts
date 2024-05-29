import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateBasketDto, UpdateBasketDto, BasketAllQueryDto } from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BasketEntity } from './entities'
import { ProductService } from '../product/product.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'
import { selectUserDto } from '../user/dto'

@Injectable()
export class BasketService {
	constructor(
		@InjectRepository(BasketEntity) private readonly basketRepository: Repository<BasketEntity>,
		private readonly productService: ProductService
	) {}

	//! ЧТо если товар уже есть в корзине
	async create(userId: number, { count, product }: CreateBasketDto) {
		await this.productService.byId(product, true)

		const basket = this.basketRepository.create({
			user: {
				id: userId
			},
			product: {
				id: product
			},
			count
		})
		return await this.basketRepository.save(basket)
	}

	// TODO: обсудить выводимые поля
	async findAll({ count, page, user, sortBy, sortOrder }: BasketAllQueryDto) {
		const where = {}
		user ? (where['user'] = { id: user }) : {}
		const { totalPrice } = await this.basketRepository
			.createQueryBuilder('baskets')
			.leftJoinAndSelect('products', 'p', 'baskets.productId = p.id')
			.select('SUM(p.price * baskets.count)', 'totalPrice')
			.where(user ? 'baskets.userId = :user' : '', { user })
			.getRawOne()

		const [items, total] = await this.basketRepository.findAndCount({
			where,
			order: {
				[sortBy]: sortOrder
			},
			take: count,
			skip: skipCount(page, count),
			relations: {
				user: true,
				product: true
			},
			select: {
				user: selectUserDto
			}
		})
		const data = new PaginationDto(items, total)
		data.meta['totalPrice'] = +totalPrice || 0
		return data
	}

	async findOne(id: number, userId?: number) {
		const where = { id }

		userId ? (where['user'] = { id: userId }) : {}

		const basket = await this.basketRepository.findOne({
			where,
			relations: {
				user: true,
				product: true
			},
			select: {
				user: selectUserDto
			}
		})
		if (!basket) throw new NotFoundException(`Корзина с id: ${id} не найдена`)
		return basket
	}

	async update(id: number, { count }: UpdateBasketDto, userId: number) {
		const basket = await this.checkByUser(id, userId)
		basket.count = count
		return await this.basketRepository.save(basket)
	}

	async delete(id: number, userId?: number) {
		if (userId) await this.checkByUser(id, userId)
		await this.basketRepository.delete({ id })
		return
	}

	async byId(id: number, withError: boolean) {
		const basket = await this.basketRepository.findOneBy({ id })

		if (!basket && withError) {
			throw new NotFoundException(`Корзина с id: ${id} не найдена`)
		}
		return basket
	}

	async checkByUser(id: number, userId: number) {
		const basket = await this.findOne(id)
		if (basket.user.id !== userId) throw new ForbiddenException()
		return basket
	}
}
