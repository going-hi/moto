import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from './entities'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { FileModule } from '@/core/file/file.module'

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity]), FileModule],
	controllers: [ProductController],
	providers: [ProductService],
	exports: [ProductService]
})
export class ProductModule {}
