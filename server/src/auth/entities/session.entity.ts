import { AbstractEntity } from '@/core/database/entities'
import { UserEntity } from '@/modules/user/entities'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

@Entity('sessions')
export class SessionEntity extends AbstractEntity {
	@Column({ unique: true })
	token: string

	@OneToOne(() => UserEntity, { onDelete: 'CASCADE' })
	@JoinColumn()
	user: UserEntity
}
