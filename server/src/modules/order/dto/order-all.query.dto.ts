import { EOrderStatus, ESortOrder } from '@/common/enums'
import { PaginationQuery } from '@/common/pagination'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate'
}

export class OrderAllQueryDto extends PaginationQuery {
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

export class OrderAllQueryDtoWithUser extends OrderAllQueryDto {
	@ApiProperty()
	@IsOptional()
	@Type(() => Number)
	@IsInt({ message: 'Id пользователя должно быть числом' })
	user?: number
}
