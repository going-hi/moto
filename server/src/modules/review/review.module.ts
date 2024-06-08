import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { ReviewEntity } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductModule } from '../product/product.module'
import { FileModule } from '@/core/file/file.module'
import { ParseQueryMiddleware } from '@/common/middlewares'

@Module({
	imports: [TypeOrmModule.forFeature([ReviewEntity]), ProductModule, FileModule],
	controllers: [ReviewController],
	providers: [ReviewService]
})
export class ReviewModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ParseQueryMiddleware).forRoutes({
			path: 'review/many',
			method: RequestMethod.DELETE
		})
	}
}
