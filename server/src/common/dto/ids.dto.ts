import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'

export class IdsDto {
	@ApiProperty()
	@IsInt({ each: true, message: 'Ids должен быть массивом чисел' })
	ids: number[]
}
