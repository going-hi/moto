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
	@ApiProperty()
	@IsInt({ message: 'Id товара должен быть числом' })
	id: number

	@ApiProperty()
	@IsPositive({ message: 'Количество товара должно быть положительным числом' })
	count: number
}

export class CreateOrderDto {
	@ApiProperty({ type: ProductItem, isArray: true })
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

	@ApiProperty()
	@IsString({ message: 'Имя должно быть строкой' })
	name: string

	@ApiProperty()
	@IsString({ message: 'Фамилия должна быть строкой' })
	surname: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Отчество должно быть строкой' })
	patronymic?: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsEmail({}, { message: 'Некорректный email' })
	email?: string

	@ApiProperty()
	@IsPhoneNumber('RU', { message: 'Некорректный телефон' })
	phone: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Индекс должен быть  строкой' })
	postIndex?: string | null

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Регион должен быть строкой' })
	region?: string | null

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Город должен быть строкой' })
	city?: string | null

	// * квартира
	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Квартира должна быть строкой' })
	flat?: string | null

	// * район
	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Район должен быть строкой' })
	district?: string | null

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Улица должна быть строкой' })
	street?: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString({ message: 'Дом должен быть строкой' })
	home: string | null
}
