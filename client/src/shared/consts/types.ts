import { ECategories } from './categories'

type TCatalogCardsTypesMap = {
	label: string
	value: string
}

export const CatalogCardsTypesMap: { [key: string]: TCatalogCardsTypesMap[] } =
	{
		[ECategories.AUTO_CHEMISTRY]: [
			{
				label: 'Мотохимия',
				value: 'motor_chemistry'
			},
			{
				label: 'Автохимия',
				value: 'auto_chemistry'
			}
		],
		[ECategories.BICYCLES]: [],
		[ECategories.ELECTRO_BENZO_TOOLS]: [
			{
				label: 'Электроинструмент',
				value: 'power_tools'
			},
			{
				label: 'Садовая техника',
				value: 'garden_equipment'
			},
			{
				label: 'Сварочное оборудование',
				value: 'welding_equipment'
			},
			{
				label: 'Строительное оборудование',
				value: 'construction_equipment'
			},
			{ label: 'Станки', value: 'machines' }
		],
		[ECategories.GARDEN_TOOLS]: [
			{
				label: 'Пилы',
				value: 'saws'
			},
			{
				label: 'Лопаты',
				value: 'shovels'
			},
			{
				label: 'Грабли',
				value: 'rake'
			},
			{
				label: 'Комбисистемы',
				value: 'combisystems'
			},
			{
				label: 'Корнеудалители',
				value: 'root_removers'
			},
			{
				label: 'Тяпки и мотыги',
				value: 'hoes'
			},
			{
				label: 'Вилы',
				value: 'pitchfork'
			},
			{
				label: 'Косы и серпы',
				value: 'scythes_and_sickles'
			},
			{
				label: 'Ножи',
				value: 'knives'
			},
			{
				label: 'Косы',
				value: 'scythes'
			}
		],
		[ECategories.MOTORCYCLES]: [
			{
				label: 'Мотоциклы',
				value: 'motorcycles'
			},
			{
				label: 'Мопеды',
				value: 'mopeds'
			},
			{
				label: 'Скутеры',
				value: 'scooters'
			}
		],
		[ECategories.SPARE_PARTS]: [
			{
				label: 'Автозапчасти',
				value: 'auto_parts'
			},
			{
				label: 'Мотозапчасти',
				value: 'motorcycle_parts'
			}
		],
		[ECategories.ALL]: []
	}
