import { IsKeyArrayObject } from '@/common/decorators'
import { ECategory, ESortOrder } from '@/common/enums'
import { PaginationQuery } from '@/common/pagination'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayMaxSize, ArrayMinSize, IsEnum, IsOptional, IsPositive } from 'class-validator'

enum ESort {
	PRICE = 'price',
	CREATE_DATE = 'createDate'
}

class Filter {
	[key: string]: string[]
}

export class ProductAllQueryDto extends PaginationQuery {
	@ApiProperty({ enum: ESort })
	@IsEnum(ESort)
	sortBy: ESort = ESort.CREATE_DATE

	@ApiProperty({ enum: ESortOrder })
	@IsEnum(ESortOrder)
	sortOrder: ESortOrder = ESortOrder.ASC

	@ApiProperty()
	@IsOptional()
	@IsPositive({ each: true, message: 'Цена должна быть массивом положительных чисел' })
	@ArrayMinSize(2, { message: 'Минимальная длина массива интервала цен 2 элемента' })
	@ArrayMaxSize(2, { message: 'Максимальная длина массива интервала цен 2 элемента' })
	@Type(() => Number)
	price?: number[]

	@ApiProperty()
	@IsOptional()
	@IsEnum(ECategory)
	category?: ECategory

	@ApiProperty()
	@IsOptional()
	@IsKeyArrayObject()
	@Type(() => Filter)
	filters?: Filter
}
