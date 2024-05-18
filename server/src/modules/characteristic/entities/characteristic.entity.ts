import { AbstractEntity } from '@/core/database/entities'
import { ProductEntity } from '@/modules/product/entities'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity('characteristic')
export class CharacteristicEntity extends AbstractEntity {
	@Column()
	key: string

	@Column()
	value: string

	@ManyToOne(() => ProductEntity, product => product.characteristics, { onDelete: 'CASCADE' })
	product: ProductEntity

	public static of(params: Partial<CharacteristicEntity>): CharacteristicEntity {
		const characteristic = new CharacteristicEntity()
		Object.assign(characteristic, params)
		return characteristic
	}
}
