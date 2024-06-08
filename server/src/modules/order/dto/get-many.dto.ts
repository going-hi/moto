import { Type } from 'class-transformer'
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'

class GetManyOrdersDtoFilters {
	@IsArray()
	@Type(() => Number)
	@IsInt({ each: true })
	ids: number[]
}

export class GetManyOrderDto {
	@IsOptional()
	@Type(() => GetManyOrdersDtoFilters)
	@ValidateNested()
	filters: GetManyOrdersDtoFilters
}
