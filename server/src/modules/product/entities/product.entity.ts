import { AbstractEntity } from '@/core/database/entities'
import { CharacteristicEntity } from '@/modules/characteristic/entities'
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

	@Column()
	preview: string

	@Column({ type: 'simple-array' })
	images: string[]

	// * мейби json
	//* deliveries: string[]

	//* payMethods: string[]

	@OneToMany(() => CharacteristicEntity, char => char.product, { cascade: true })
	characteristics: CharacteristicEntity[]
}
