import { ESortOrder } from '@/common/enums'
import { PaginationUserQuery } from '@/common/pagination'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate',
	COUNT = 'count'
}

export class BasketAllQueryDto extends PaginationUserQuery {
	@ApiProperty({ enum: ESort })
	@IsEnum(ESort)
	sortBy: ESort = ESort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC
}

export class BasketAllForUserQueryDto extends OmitType(BasketAllQueryDto, ['user']) {}
