import { ECategory } from '@/common/enums'
import { CreateCharacteristicDto } from '@/modules/characteristic/dto'
import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Type } from 'class-transformer'
import {
	IsArray,
	IsEnum,
	IsOptional,
	IsPositive,
	IsString,
	MaxLength,
	MinLength,
	ValidateNested
} from 'class-validator'

export class CreateProductDto {
	@ApiProperty()
	@MaxLength(200, { message: 'Максимальная длина названия товара 200 символа' })
	@MinLength(2, { message: 'Минимальная длина названия товара 2 символа' })
	@IsString({ message: 'Название товара должно быть строкой' })
	name: string

	@ApiProperty({ required: false })
	@IsOptional()
	@MaxLength(256, { message: 'Максимальная длина описания товара 256 символа' })
	@MinLength(2, { message: 'Минимальная длина описания товара 2 символа' })
	@IsString({ message: 'Название товара должно быть строкой' })
	description?: string

	@ApiProperty()
	@Type(() => Number)
	@IsPositive({ message: 'Цена должна быть положительным числом' })
	price: number

	@ApiProperty()
	@MaxLength(64, { message: 'Максимальная длина бренда товара 64 символа' })
	@MinLength(2, { message: 'Минимальная длина бренда товара 2 символа' })
	@IsString({ message: 'Бренд должен быть строкой' })
	brand: string

	@ApiProperty()
	@MaxLength(64, { message: 'Максимальная длина типа товара 64 символа' })
	@MinLength(2, { message: 'Минимальная длина типа товара 2 символа' })
	@IsString({ message: 'Тип должен быть строкой' })
	type: string

	@ApiProperty({ enum: ECategory })
	@IsEnum(ECategory)
	category: ECategory

	@ApiProperty({ type: () => CreateCharacteristicDto, isArray: true, required: false })
	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CreateCharacteristicDto)
	characteristics?: CreateCharacteristicDto[]

	// * File upload
	@ApiProperty({
		format: 'binary',
		required: true,
		description: 'file type should be jpeg | png | jpg | webp'
	})
	@Exclude()
	images: unknown
}