import { AbstractEntity } from '@/core/database/entities'
import { ProductEntity } from '@/modules/product/entities'
import { UserEntity } from '@/modules/user/entities'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity('baskets')
export class BasketEntity extends AbstractEntity {
	@Column()
	count: number

	@ManyToOne(() => UserEntity, user => user.baskets, { onDelete: 'CASCADE' })
	user: UserEntity

	@ManyToOne(() => ProductEntity, product => product.baskets, { onDelete: 'CASCADE' })
	product: ProductEntity
}
