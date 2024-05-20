import { PaginationQuery } from '@/common/pagination'
import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class SearchProductDto extends PaginationQuery {
	@ApiProperty()
	@IsString({ message: 'Поле поиска должна быть строкой' })
	query: string
}
