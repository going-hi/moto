import { ESortOrder } from '@/common/enums'
import { PaginationQuery } from '@/common/pagination'
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate'
}

export class UserAllQueryDto extends PaginationQuery {
	@ApiProperty({ enum: ESort })
	@IsEnum(ESort)
	sortBy: ESort = ESort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC

	@IsOptional()
	@IsString()
	q?: string
}
