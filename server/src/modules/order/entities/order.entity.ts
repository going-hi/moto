import { AbstractEntity } from '@/core/database/entities'
import { UserEntity } from '@/modules/user/entities'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { OrderItemEntity } from './order-item.entity'
import { EOrderStatus } from '@/common/enums'
import { PaymentMethod, ShippingMethod } from '../enum'

@Entity('orders')
export class OrderEntity extends AbstractEntity {
	@Column()
	name: string

	@Column()
	surname: string

	@Column({ nullable: true })
	patronymic?: string | null

	@Column({ nullable: true })
	email?: string | null

	@Column()
	phone: string

	@Column({ nullable: true })
	postIndex: string | null

	@Column({ nullable: true })
	region: string | null

	@Column({ nullable: true })
	city: string | null

	// * квартира
	@Column({ nullable: true })
	flat: string | null

	// * район
	@Column({ nullable: true })
	district: string | null

	@Column({ nullable: true })
	street: string | null

	@Column({ nullable: true })
	home: string | null

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
