import { ESortOrder } from '@/common/enums'
import { PaginationQuery } from '@/common/pagination'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional } from 'class-validator'

enum ESort {
	CREATE_DATE = 'createDate'
}

export class FavouritesAllQueryDto extends PaginationQuery {
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

export class FavouritesAllQueryDtoForUser extends OmitType(FavouritesAllQueryDto, ['user']) {}
