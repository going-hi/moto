import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrderEntity, OrderItemEntity } from './entities'
import { ProductModule } from '../product/product.module'
import { BasketModule } from '../basket/basket.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([OrderEntity, OrderItemEntity]),
		ProductModule,
		BasketModule
	],
	controllers: [OrderController],
	providers: [OrderService]
})
export class OrderModule {}
