import { Type } from 'class-transformer'
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'

class DeleteReviewsManyDtoFilters {
	@IsArray()
	@ValidateNested({ each: true })
	@IsInt()
	ids: number[]
}

export class DeleteManyReviewsDto {
	@IsOptional()
	@Type(() => DeleteReviewsManyDtoFilters)
	filters: DeleteReviewsManyDtoFilters
}
