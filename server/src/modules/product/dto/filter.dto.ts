import { CategoriesToType } from '@/common/dto'
import { getTypes } from '@/core/utils'
import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsString } from 'class-validator'

const arrayContain = getTypes(CategoriesToType)

const arrayCategory = [...Object.keys(CategoriesToType)]

export class FilterDto {
	@ApiProperty()
	@IsIn(arrayContain)
	@IsString()
	type: string

	@ApiProperty()
	@IsIn(arrayCategory)
	@IsString()
	category: string
}
