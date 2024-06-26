import { Module, forwardRef } from '@nestjs/common'
import { FavouritesService } from './favourites.service'
import { FavouritesController } from './favourites.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FavouritesEntity } from './entities'
import { ProductModule } from '../product/product.module'

@Module({
	imports: [TypeOrmModule.forFeature([FavouritesEntity]), forwardRef(() => ProductModule)],
	controllers: [FavouritesController],
	providers: [FavouritesService],
	exports: [FavouritesService]
})
export class FavouritesModule {}
