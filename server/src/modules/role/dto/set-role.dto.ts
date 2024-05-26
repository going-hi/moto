import { ERoles } from '@/common/enums'
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, NotEquals } from 'class-validator'

export class SetRoleDto {
	@ApiProperty()
	@IsInt({ message: 'Id пользователя должно быть числом' })
	user: number

	@ApiProperty({ enum: ERoles, description: 'Все роли, кроме owner' })
	@NotEquals(ERoles['OWNER'], { message: 'Возможны роли: admin, user' })
	@IsEnum(ERoles)
	role: ERoles
}
