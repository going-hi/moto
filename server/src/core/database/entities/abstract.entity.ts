import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class AbstractEntity {
	@PrimaryGeneratedColumn()
	id: number

	@CreateDateColumn()
	createDate: Date

	@UpdateDateColumn()
	updateDate: Date
}
