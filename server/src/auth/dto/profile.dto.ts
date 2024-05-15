import { ERoles } from '@/common/enums'
import { JwtPayload } from './jwt-payload.dto'

export class ProfileDto {
	id: number
	email: string
	isConfirm: boolean
	name: string
	role: ERoles

	constructor({ id, email, isConfirm, name, role }: JwtPayload) {
		this.id = id
		this.email = email
		this.isConfirm = isConfirm
		this.name = name
		this.role = role
	}
}