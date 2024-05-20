import { ESortOrder } from '@/common/enums'
import { PaginationQuery } from '@/common/pagination'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate',
	COUNT = 'count'
}

export class BasketAllQueryDto extends PaginationQuery {
	@ApiProperty({ enum: ESort })
	@IsEnum(ESort)
	sortBy: ESort = ESort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC

	@ApiProperty()
	@IsOptional()
	@IsInt({ message: 'Id Пользователя должно быть числом' })
	@Type(() => Number)
	user?: number
}

export class BasketAllQueryDtoForUser extends OmitType(BasketAllQueryDto, ['user']) {}
