import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from './entities'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { FileModule } from '@/core/file/file.module'
import { AuthModule } from '@/auth/auth.module'
import { FavouritesModule } from '../favourites/favourites.module'

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
export class ProductModule {}
