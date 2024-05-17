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
