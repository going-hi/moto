import { ECategory } from '@/common/enums'
import { getRandomEnumValue } from '@/core/utils'
import { ProductEntity } from '@/modules/product/entities'
import { faker } from '@faker-js/faker'
import * as filterData from '@/modules/product/dto/filter.json'
import { characteristicGenerateByFilter } from './characteristic.generate'

export function productGenerate() {
	const category = getRandomEnumValue(ECategory)
	const product = new ProductEntity()
	product.name = faker.commerce.productName()
	product.price = +faker.commerce.price({ dec: 0 })
	product.description = faker.commerce.productDescription()
	product.category = category
	let filter: object
	let type: string | null

	const filterCategory = filterData[category]
	if (filterCategory?.common) {
		type = null
		filterCategory['char']
		filter = filterCategory['char']
	} else {
		const typeArray = Object.keys(filterCategory)
		type = typeArray[Math.floor(Math.random() * typeArray.length)]
		filter = filterCategory[type]
	}
	product.brand = faker.company.name()
	product.images = []
	product.type = type
	product.characteristics = characteristicGenerateByFilter(filter)
	return product
}
