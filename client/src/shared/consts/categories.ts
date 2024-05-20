import { z } from 'zod'

export const CategoriesEnumModel = z.enum([
	'all',
	'bikes',
	'bicycles',
	'garden_tools',
	'spare_parts',
	'chemistry',
	'electro_tools'
])

export const ECategories = CategoriesEnumModel.enum

export const CategoriesRuMap: { [key: string]: string } = {
	[ECategories.all]: 'ВСЕ',
	[ECategories.bikes]: 'МОТОЦИКЛЫ',
	[ECategories.bicycles]: 'ВЕЛОСИПЕДЫ',
	[ECategories.garden_tools]: 'САДОВЫЙ ИНВЕНТАРЬ',
	[ECategories.electro_tools]: 'ЭЛЕКТРО-БЕНЗО ИНСТРУМЕНТЫ',
	[ECategories.chemistry]: 'АВТО-МОТО ХИМИЯ',
	[ECategories.spare_parts]: 'ЗАПЧАСТИ'
}
