import { CreateUserDto } from '@/modules/user/dto'
import { ApiProperty, PickType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, Max, Min } from 'class-validator'

export class CodeDto extends PickType(CreateUserDto, ['email']) {
	@ApiProperty()
	@Type(() => Number)
	@IsInt({ message: 'Код должен быть числом' })
	@Max(999999, { message: 'Максимальное значение кода 999999' })
	@Min(100000, { message: 'Минимальное значение кода 100000' })
	code: number
}
