import {
	ForbiddenException,
	Inject,
	Injectable,
	NotFoundException,
	forwardRef
} from '@nestjs/common'
import { CreateFavouritesDto, FavouritesAllQueryDto } from './dto'
import { InjectRepository } from '@nestjs/typeorm'
import { FavouritesEntity } from './entities'
import { Repository } from 'typeorm'
import { ProductService } from '../product/product.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'
import { selectUserDto } from '../user/dto'

@Injectable()
export class FavouritesService {
	constructor(
		@InjectRepository(FavouritesEntity)
		private readonly favouritesRepository: Repository<FavouritesEntity>,
		@Inject(forwardRef(() => ProductService))
		private readonly productService: ProductService
	) {}

	async create(userId: number, { product }: CreateFavouritesDto) {
		await this.productService.byId(product, true)
		const dto = {
			product: {
				id: product
			},
			user: {
				id: userId
			}
		}
		const oldFavourites = await this.favouritesRepository.findOne({
			where: dto,
			select: {
				product: {
					id: true
				},
				user: {
					id: true
				}
			},
			relations: {
				user: true,
				product: true
			}
		})
		if (oldFavourites) return oldFavourites
		const favourites = this.favouritesRepository.create(dto)
		return await this.favouritesRepository.save(favourites)
	}

	// TODO: обсудить поля
	async findAll({ count, page, sortBy, sortOrder, user }: FavouritesAllQueryDto) {
		const where = {}
		user ? (where['user'] = { id: user }) : {}
		const [items, total] = await this.favouritesRepository.findAndCount({
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

		return new PaginationDto(items, total)
	}

	async findOne(id: number, userId?: number) {
		const where = { id }

		userId ? (where['user'] = { id: userId }) : {}

		const favourites = await this.favouritesRepository.findOne({
			where,
			relations: {
				user: true,
				product: true
			},
			select: {
				user: selectUserDto
			}
		})
		if (!favourites) throw new NotFoundException(`Избранное с id: ${id} не найдена`)
		return favourites
	}

	async delete(id: number, userId?: number) {
		if (userId) await this.checkByUser(id, userId)
		await this.favouritesRepository.delete({ id })
		return
	}

	async checkByUser(id: number, userId: number) {
		const favourites = await this.findOne(id)
		if (favourites.user.id !== userId) throw new ForbiddenException()
		return favourites
	}

	async getByUser(userId: number) {
		const favorites = await this.favouritesRepository.find({
			where: { user: { id: userId } },
			relations: { product: true },
			select: {
				product: { id: true }
			}
		})
		return favorites
	}
}
