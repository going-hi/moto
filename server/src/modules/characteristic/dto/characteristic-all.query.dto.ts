import { PaginationQuery } from '@/common/pagination'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional } from 'class-validator'

export class CharacteristicAllQueryDto extends PaginationQuery {
	@ApiProperty()
	@IsOptional()
	@IsInt({ message: 'Id продукта должно быть числом' })
	@Type(() => Number)
	product?: number
}
