import { Type } from 'class-transformer'
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'

class GetManyProductsDtoFilters {
	@IsArray()
	@ValidateNested({ each: true })
	@IsInt()
	ids: number[]
}

export class GetManyProductsDto {
	@IsOptional()
	@Type(() => GetManyProductsDtoFilters)
	filters: GetManyProductsDtoFilters
}
