import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from './entities'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { FileModule } from '@/core/file/file.module'
import { AuthModule } from '@/auth/auth.module'
import { FavouritesModule } from '../favourites/favourites.module'
import { ParseQueryMiddleware } from '../../common/middlewares/parse-query.middleware'

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductEntity]),
		FileModule,
		AuthModule,
		forwardRef(() => FavouritesModule)
	],
	controllers: [ProductController],
	providers: [ProductService],
	exports: [ProductService]
})
export class ProductModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(ParseQueryMiddleware)
			.forRoutes(
				{ path: 'product', method: RequestMethod.GET },
				{ path: 'product/many', method: RequestMethod.GET }
			)
	}
}
