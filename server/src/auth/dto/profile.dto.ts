import { ERoles } from '@/common/enums'
import { JwtPayload } from './jwt-payload.dto'

export class ProfileDto {
	id: number
	email: string
	isConfirm: boolean
	name: string
	surname: string
	role: ERoles
	avatar: string | null
	phone: string

	constructor({ id, email, isConfirm, name, surname, role, avatar, phone }: JwtPayload) {
		this.id = id
		this.email = email
		this.phone = phone
		this.name = name
		this.surname = surname
		this.role = role
		this.isConfirm = isConfirm
		this.avatar = avatar
	}
}
