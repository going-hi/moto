import { ERoles } from '@/common/enums/role.enum'
import { AbstractEntity } from '@/core/database/entities'
import { BasketEntity } from '@/modules/basket/entities'
import { FavouritesEntity } from '@/modules/favourites/entities'
import { OrderEntity } from '@/modules/order/entities'
import { Exclude } from 'class-transformer'
import { Column, Entity, Generated, OneToMany } from 'typeorm'

@Entity('users')
export class UserEntity extends AbstractEntity {
	@Column({ unique: true })
	email: string

	@Column({ default: null })
	avatar: string | null

	@Column({ unique: true })
	phone: string

	@Column()
	name: string

	@Column()
	surname: string

	@Exclude()
	@Column()
	password: string

	@Column({ enum: ERoles, default: ERoles.USER })
	role: ERoles

	@Exclude()
	@Column({ nullable: true, unique: true })
	@Generated('uuid')
	link: string | null

	@Exclude()
	@Column({ nullable: true })
	code: number | null

	@Exclude()
	@Column({ default: false })
	isConfirm: boolean

	@OneToMany(() => OrderEntity, order => order.user, { cascade: true })
	orders: OrderEntity

	@OneToMany(() => BasketEntity, basket => basket.user, { cascade: true })
	baskets: BasketEntity[]

	@OneToMany(() => FavouritesEntity, favourites => favourites.user, { cascade: true })
	favorites: FavouritesEntity[]
}
