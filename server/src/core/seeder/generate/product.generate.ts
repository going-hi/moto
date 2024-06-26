import { ECategory } from '@/common/enums'
import { getRandomEnumValue } from '@/core/utils'
import { ProductEntity } from '@/modules/product/entities'
import { faker } from '@faker-js/faker'
import * as filterData from '@/modules/product/dto/filter.json'
import { characteristicGenerateByFilter } from './characteristic.generate'
import { readdirSync } from 'fs'
import { join } from 'path'
import { CategoriesToType } from '@/common/dto'

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
		type = getRandomEnumValue(CategoriesToType[category]) || null
		filter = filterCategory['char']
	} else {
		const typeArray = Object.keys(filterCategory)
		type = typeArray[Math.floor(Math.random() * typeArray.length)]
		filter = filterCategory[type]
	}
	const brand = filter['бренд']
		? filter['бренд'][Math.floor(Math.random() * filter['бренд'].length)]
		: faker.company.name()

	const src = join(__dirname, '../../../../static/image')
	const dirs = readdirSync(src)

	// New random list of dirs
	const randomLists = []

	if (dirs.length) {
		for (let i = 0; i < 3; i++) {
			randomLists[i] = dirs[Math.floor(Math.random() * dirs.length)]
		}
	}

	product.brand = brand
	product.images = randomLists
	product.type = type
	product.characteristics = characteristicGenerateByFilter(filter, brand)
	return product
}
