import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsInt } from 'class-validator'

export class IdsDto {
	@ApiProperty()
	@IsArray()
	@IsInt({ each: true, message: 'Ids должен быть массивом чисел' })
	@Type(() => Number)
	ids: number[]
}
