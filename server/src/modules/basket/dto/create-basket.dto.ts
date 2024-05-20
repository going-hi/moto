import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsPositive } from 'class-validator'

export class CreateBasketDto {
	@ApiProperty()
	@IsPositive({ message: 'Количество должно быть положительным числом' })
	count: number

	@ApiProperty()
	@IsInt({ message: 'Id продукта должно быть числом' })
	product: number
}
