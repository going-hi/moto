import { ApiProperty } from '@nestjs/swagger'
import { PaginationQuery } from './pagination.query'
import { IsInt, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class PaginationUserQuery extends PaginationQuery {
	@ApiProperty()
	@IsOptional()
	@IsInt({ message: 'Id Пользователя должно быть числом' })
	@Type(() => Number)
	user?: number
}
