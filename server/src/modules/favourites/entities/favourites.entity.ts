import { AbstractEntity } from '@/core/database/entities'
import { ProductEntity } from '@/modules/product/entities'
import { UserEntity } from '@/modules/user/entities'
import { Entity, ManyToOne } from 'typeorm'

@Entity('favourites')
export class FavouritesEntity extends AbstractEntity {
	@ManyToOne(() => UserEntity, user => user.favorites, { onDelete: 'CASCADE' })
	user: UserEntity

	@ManyToOne(() => ProductEntity, product => product.favorites, { onDelete: 'CASCADE' })
	product: ProductEntity
}
