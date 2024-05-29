import { EOrderStatus, ESortOrder } from '@/common/enums'
import { PaginationUserQuery } from '@/common/pagination'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { IsEnum, IsOptional } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate'
}

export class OrderAllQueryDto extends PaginationUserQuery {
	@ApiProperty({ enum: ESort })
	@IsEnum(ESort)
	sortBy: ESort = ESort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC

	@ApiProperty()
	@IsOptional()
	@IsEnum(EOrderStatus)
	status: EOrderStatus
}

export class OrderAllForUserQueryDto extends OmitType(OrderAllQueryDto, ['user']) {}
