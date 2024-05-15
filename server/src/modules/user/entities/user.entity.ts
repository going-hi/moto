import { ERoles } from '@/common/enums/role.enum'
import { AbstractEntity } from '@/core/database/entities'
import { Column, Entity, Generated } from 'typeorm'

@Entity('users')
export class UserEntity extends AbstractEntity {
	@Column({ unique: true })
	email: string

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
}
