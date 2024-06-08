import { Type } from 'class-transformer'
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'

class DeleteOrderManyDtoFilters {
	@IsArray()
	@ValidateNested({ each: true })
	@IsInt()
	ids: number[]
}

export class DeleteManyOrdersDto {
	@IsOptional()
	@Type(() => DeleteOrderManyDtoFilters)
	filters: DeleteOrderManyDtoFilters
}
