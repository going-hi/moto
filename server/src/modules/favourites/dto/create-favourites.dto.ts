import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'

export class CreateFavouritesDto {
	@ApiProperty()
	@IsInt({ message: 'Id продукта должно быть числом' })
	product: number
}
