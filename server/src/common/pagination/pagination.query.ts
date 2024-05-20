import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, Min } from 'class-validator'

export class PaginationQuery {
	@ApiProperty()
	@IsOptional()
	@Type(() => Number)
	@IsInt({ message: 'Параметр номер страницы должен быть числом' })
	@Min(1, { message: 'Параметр номер страницы должен быть больше 0' })
	page: number = 1

	@ApiProperty()
	@IsOptional()
	@Type(() => Number)
	@IsInt({ message: 'Параметр количество элементов должен быть числом' })
	@Min(1, { message: 'Параметр количество элементов должен быть больше 0' })
	count: number = 10
}
