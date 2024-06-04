import { ESortOrder } from '@/common/enums'
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'
import { PaginationQuery } from '@/common/pagination'

enum EReviewSort {
	CREATE_DATE = 'createDate'
}

export class ReviewAllDto extends PaginationQuery {
	@ApiProperty({ enum: EReviewSort })
	@IsEnum(EReviewSort)
	sortBy: EReviewSort = EReviewSort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC
}
