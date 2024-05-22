import { ERoles } from '@/common/enums/role.enum'
import { AbstractEntity } from '@/core/database/entities'
import { BasketEntity } from '@/modules/basket/entities'
import { FavouritesEntity } from '@/modules/favourites/entities'
import { OrderEntity } from '@/modules/order/entities'
import { Column, Entity, Generated, OneToMany } from 'typeorm'

@Entity('users')
export class UserEntity extends AbstractEntity {
	@Column({ unique: true })
	email: string

	@Column({ unique: true })
	phone: string

	@Column()
	name: string

	@Column()
	surname: string

	@Column()
	password: string

	@Column({ nullable: true, unique: true })
	@Generated('uuid')
	link: string | null

	@Column({ enum: ERoles, default: ERoles.USER })
	role: ERoles

	@Column({ default: false })
	isConfirm: boolean

	@OneToMany(() => OrderEntity, order => order.user, { cascade: true })
	orders: OrderEntity

	@OneToMany(() => BasketEntity, basket => basket.user, { cascade: true })
	baskets: BasketEntity[]

	@OneToMany(() => FavouritesEntity, favourites => favourites.user, { cascade: true })
	favorites: FavouritesEntity[]
}
