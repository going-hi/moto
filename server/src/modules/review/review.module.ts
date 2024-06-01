import { Module } from '@nestjs/common'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { ReviewEntity } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductModule } from '../product/product.module'
import { FileModule } from '@/core/file/file.module'

@Module({
	imports: [TypeOrmModule.forFeature([ReviewEntity]), ProductModule, FileModule],
	controllers: [ReviewController],
	providers: [ReviewService]
})
export class ReviewModule {}
