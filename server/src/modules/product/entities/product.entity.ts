import { ECategory } from '@/common/enums'
import { AbstractEntity } from '@/core/database/entities'
import { BasketEntity } from '@/modules/basket/entities'
import { CharacteristicEntity } from '@/modules/characteristic/entities'
import { FavouritesEntity } from '@/modules/favourites/entities'
import { OrderItemEntity } from '@/modules/order/entities'
import { ReviewEntity } from '@/modules/review/entities/review.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity('products')
export class ProductEntity extends AbstractEntity {
	@Column()
	name: string

	@Column({ nullable: true })
	description: string | null

	@Column({ nullable: true })
	brand: string | null

	@Column()
	price: number

	@Column({ type: 'simple-array' })
	images: string[]

	@Column({ default: 0 })
	countOrders: number

	@Column({ type: 'enum', enum: ECategory })
	category: ECategory

	@Column({ nullable: true })
	type?: string | null

	@OneToMany(() => CharacteristicEntity, char => char.product, { cascade: true })
	characteristics: CharacteristicEntity[]

	@OneToMany(() => OrderItemEntity, item => item.product, { cascade: true })
	orders: OrderItemEntity[]

	@OneToMany(() => BasketEntity, basket => basket.product, { cascade: true })
	baskets: BasketEntity[]

	@OneToMany(() => FavouritesEntity, favourites => favourites.product, { cascade: true })
	favorites: FavouritesEntity[]

	@OneToMany(() => ReviewEntity, review => review.product, { cascade: true })
	reviews: ReviewEntity[]
}
