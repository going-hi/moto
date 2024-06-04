import { AbstractEntity } from '@/core/database/entities'
import { ProductEntity } from '@/modules/product/entities'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity('reviews')
export class ReviewEntity extends AbstractEntity {
	@Column({ nullable: true })
	avatar: string | null

	@Column()
	name: string

	@Column()
	text: string

	@ManyToOne(() => ProductEntity, product => product.reviews, { onDelete: 'CASCADE' })
	product: ProductEntity
}
