import { ECategory } from '../enums/categories.enum'
import {
	EAutoChemistryTypes,
	EBicyclesTypes,
	EElectroToolsTypes,
	EGardenToolsTypes,
	EMotorcyclesTypes
} from '@/common/enums'

export const CategoriesToType = {
	[ECategory.MOTORCYCLES]: EMotorcyclesTypes,
	[ECategory.BICYCLES]: EBicyclesTypes,
	[ECategory.GARDEN__TOOLS]: EGardenToolsTypes,
	[ECategory.ELECTRO_BENZO_TOOLS]: EElectroToolsTypes,
	[ECategory.AUTO_CHEMISTRY]: EAutoChemistryTypes
}
