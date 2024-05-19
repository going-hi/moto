import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator'

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
}
