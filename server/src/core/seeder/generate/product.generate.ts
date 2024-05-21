import { CategoriesToType } from '@/common/dto'
import { ECategory } from '@/common/enums'
import { ProductEntity } from '@/modules/product/entities'
import { faker } from '@faker-js/faker'

export function productGenerate() {
	const category = ECategory.MOTORCYCLES
	const product = new ProductEntity()
	product.name = faker.commerce.productName()
	product.price = +faker.commerce.price({ dec: 0 })
	product.description = faker.commerce.productDescription()
	product.category = category
	product.type = CategoriesToType[category].MOTORCYCLES
	product.brand = faker.company.name()
	product.images = ['image/123123.png', 'image/123123.png', 'image/123123.png']
	return product
}
