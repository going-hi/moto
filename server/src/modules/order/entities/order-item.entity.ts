import { ProductEntity } from '@/modules/product/entities'
import { Column, Entity, ManyToOne } from 'typeorm'
import { OrderEntity } from './order.entity'
import { AbstractEntity } from '@/core/database/entities'

@Entity('OrderItem')
export class OrderItemEntity extends AbstractEntity {
	@Column()
	count: number

	@Column()
	price: number

	@ManyToOne(() => ProductEntity, product => product.orders, { onDelete: 'SET NULL' })
	product: ProductEntity

	@ManyToOne(() => OrderEntity, order => order.items, { onDelete: 'CASCADE' })
	order: OrderEntity
}
