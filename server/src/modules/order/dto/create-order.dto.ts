import { Type } from 'class-transformer'
import {
	ArrayMinSize,
	IsArray,
	IsEmail,
	IsEnum,
	IsInt,
	IsOptional,
	IsPhoneNumber,
	IsPositive,
	IsString,
	ValidateNested
} from 'class-validator'
import { PaymentMethod, ShippingMethod } from '../enum'
import { ApiProperty } from '@nestjs/swagger'

class ProductItem {
	@IsInt({ message: 'Id товара должен быть числом' })
	id: number

	@IsPositive({ message: 'Количество товара должно быть положительным числом' })
	count: number
}

export class CreateOrderDto {
	@ArrayMinSize(1, {
		message: `Массив товаров должен содержать не меньше ${1} элементов`
	})
	@IsArray({ message: 'Продукты должны быть массивом объектов' })
	@Type(() => ProductItem)
	@ValidateNested({ each: true })
	products: ProductItem[]

	@ApiProperty({ enum: PaymentMethod })
	@IsEnum(PaymentMethod)
	paymentMethod: PaymentMethod

	@ApiProperty({ enum: ShippingMethod })
	@IsEnum(ShippingMethod)
	shippingMethod: ShippingMethod

	@IsString({ message: 'Имя должно быть строкой' })
	name: string

	@IsString({ message: 'Фамилия должна быть строкой' })
	surname: string

	@IsString({ message: 'Отчество должно быть строкой' })
	patronymic: string

	@IsEmail({}, { message: 'Некорректный email' })
	email: string

	@IsPhoneNumber('RU', { message: 'Некорректный телефон' })
	phone: string

	@IsOptional()
	@IsString({ message: 'Индекс должен быть  строкой' })
	postIndex?: string | null

	@IsOptional()
	@IsString({ message: 'Регион должен быть строкой' })
	region?: string | null

	@IsOptional()
	@IsString({ message: 'Город должен быть строкой' })
	city?: string | null

	// * квартира
	@IsOptional()
	@IsString({ message: 'Квартира должна быть строкой' })
	flat?: string | null

	// * район
	@IsOptional()
	@IsString({ message: 'Район должен быть строкой' })
	district?: string | null

	@IsOptional()
	@IsString({ message: 'Улица должна быть строкой' })
	street?: string

	@IsOptional()
	@IsString({ message: 'Дом должен быть строкой' })
	home: string | null
}
