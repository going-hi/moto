import { Injectable, NotFoundException } from '@nestjs/common'
import { ReviewEntity } from './entities'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateReviewDto, CreateReviewDto, ReviewAllDto } from './dto'
import { ProductService } from '../product/product.service'
import { FileService } from '@/core/file/file.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'

@Injectable()
export class ReviewService {
	constructor(
		@InjectRepository(ReviewEntity) private readonly reviewRepository: Repository<ReviewEntity>,
		private readonly productService: ProductService,
		private readonly fileService: FileService
	) {}

	async create(dto: CreateReviewDto, file?: Express.Multer.File) {
		await this.productService.byId(dto.product, true)
		let link = null
		if (file) {
			link = await this.fileService.uploadFile(file)
		}
		const review = this.reviewRepository.create({
			...dto,
			avatar: link,
			product: { id: dto.product }
		})
		return await this.reviewRepository.save(review)
	}

	async getAll({ sortBy, sortOrder, count, page }: ReviewAllDto) {
		const [reviews, total] = await this.reviewRepository.findAndCount({
			order: {
				[sortBy]: sortOrder
			},
			take: count,
			skip: skipCount(page, count),
			relations: {
				product: true
			}
		})
		return new PaginationDto(reviews, total)
	}

	async getOne(id: number) {
		const review = await this.reviewRepository.findOne({
			where: { id },
			relations: { product: true },
			select: {
				product: {
					id: true,
					brand: true,
					name: true,
					description: true,
					category: true,
					type: true
				}
			}
		})
		if (!review) throw new NotFoundException(`Отзыв с id: ${id} не найден`)
		return review
	}

	async update(id: number, dto: UpdateReviewDto, file?: Express.Multer.File) {
		const review = await this.getOne(id)

		if (file) {
			review.avatar ? await this.fileService.deleteFile(review.avatar) : {}
			review.avatar = await this.fileService.uploadFile(file)
		}

		if (review.product.id !== dto.product) {
			await this.productService.byId(dto.product, true)
		}

		return await this.reviewRepository.save({ ...review, ...dto, product: { id: dto.product } })
	}

	async delete(id: number) {
		await this.getOne(id)
		await this.reviewRepository.delete({ id })
	}
}
