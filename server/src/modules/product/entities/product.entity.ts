import { ECategory } from '@/common/enums'
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

	@Column({ type: 'simple-array' })
	images: string[]

	@Column({ type: 'enum', enum: ECategory })
	category: ECategory

	@Column()
	type: string

	@OneToMany(() => CharacteristicEntity, char => char.product, { cascade: true })
	characteristics: CharacteristicEntity[]
}
