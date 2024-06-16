import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateCharacteristicDto {
	@ApiProperty()
	@MaxLength(3000, { message: 'Максимальная длина название параметра 3000 символа' })
	@MinLength(1, { message: 'Минимальная длина название параметра 1 символа' })
	@IsString({ message: 'Название параметра должно быть строкой' })
	key: string

	@ApiProperty()
	@MaxLength(3000, { message: 'Максимальная длина значение параметра 3000 символа' })
	@MinLength(1, { message: 'Минимальная длина значение параметра 1 символа' })
	@IsString({ message: 'Значение параметра должно быть строкой' })
	value: string
}

// * for create
export class CreateCharacteristicWithProductDto extends CreateCharacteristicDto {
	@ApiProperty({ description: 'id продукта' })
	@IsInt({ message: 'Id товара должно быть числом' })
	product: number
}
