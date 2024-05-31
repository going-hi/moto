import { AbstractEntity } from '@/core/database/entities'
import { UserEntity } from '@/modules/user/entities'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { OrderItemEntity } from './order-item.entity'
import { EOrderStatus } from '@/common/enums'
import { PaymentMethod, ShippingMethod } from '../enum'

@Entity('orders')
export class OrderEntity extends AbstractEntity {
	@Column({ enum: PaymentMethod })
	paymentMethod: PaymentMethod

	@Column({ enum: ShippingMethod })
	shippingMethod: ShippingMethod

	@Column()
	total: number

	@OneToMany(() => OrderItemEntity, item => item.order, { cascade: true })
	items: OrderItemEntity[]

	@ManyToOne(() => UserEntity, user => user.orders, { onDelete: 'SET NULL' })
	user: UserEntity

	@Column({ enum: EOrderStatus, default: EOrderStatus.NEW })
	status: EOrderStatus
}
