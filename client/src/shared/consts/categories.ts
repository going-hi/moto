import { z } from 'zod'

export enum ECategories {
	ALL = 'all',
	MOTORCYCLES = 'motorcycles',
	BICYCLES = 'bicycles',
	GARDEN_TOOLS = 'garden_tools',
	SPARE_PARTS = 'spare_parrs',
	AUTO_CHEMISTRY = 'auto_chemistry',
	ELECTRO_BENZO_TOOLS = 'electro_benzo_tools'
}

export const CategoriesEnumModel = z.nativeEnum(ECategories)

export const ECategoriess = CategoriesEnumModel.enum

export const CategoriesRuMap: { [key: string]: string } = {
	[ECategories.ALL]: 'ВСЕ',
	[ECategories.MOTORCYCLES]: 'МОТОЦИКЛЫ',
	[ECategories.BICYCLES]: 'ВЕЛОСИПЕДЫ',
	[ECategories.GARDEN_TOOLS]: 'САДОВЫЙ ИНВЕНТАРЬ',
	[ECategories.ELECTRO_BENZO_TOOLS]: 'ЭЛЕКТРО-БЕНЗО ИНСТРУМЕНТЫ',
	[ECategories.AUTO_CHEMISTRY]: 'АВТО-МОТО ХИМИЯ',
	[ECategories.SPARE_PARTS]: 'ЗАПЧАСТИ'
}
