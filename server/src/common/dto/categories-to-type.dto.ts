import { ECategory } from '../enums/categories.enum'
import {
	EAutoChemistryTypes,
	EBicyclesTypes,
	EElectroToolsTypes,
	EGardenToolsTypes,
	EMotorcyclesTypes,
	ESparePartsTypes
} from '@/common/enums'

export const CategoriesToType = {
	[ECategory.MOTORCYCLES]: EMotorcyclesTypes,
	[ECategory.BICYCLES]: EBicyclesTypes,
	[ECategory.GARDEN_TOOLS]: EGardenToolsTypes,
	[ECategory.ELECTRO_BENZO_TOOLS]: EElectroToolsTypes,
	[ECategory.AUTO_CHEMISTRY]: EAutoChemistryTypes,
	[ECategory.SPARE_PARTS]: ESparePartsTypes
}
