export const CategoryArr = [
	{
		id: 'motorcycles',
		name: 'Мотоциклы'
	},
	{
		id: 'bicycles',
		name: 'Велосипеды'
	},
	{
		id: 'garden_tools',
		name: 'Садовые инструменты'
	},
	{
		id: 'electro_benzo_tools',
		name: 'Электро-бензо инструменты'
	},
	{
		id: 'auto_chemistry',
		name: 'Авто-мото химия'
	},
	{
		id: 'spare_parts',
		name: 'Запчасти'
	}
]

export const CategoryTypesMap = {
	all: [],
	motorcycles: [
		{
			name: 'Мотоциклы',
			id: 'motorcycles'
		},
		{
			name: 'Мопеды',
			id: 'mopeds'
		},
		{
			name: 'Скутеры',
			id: 'scooters'
		}
	],
	bicycles: [],
	garden_tools: [
		{
			name: 'Пилы',
			id: 'saws'
		},
		{
			name: 'Лопаты',
			id: 'shovels'
		},
		{
			name: 'Грабли',
			id: 'rake'
		},
		{
			name: 'Комбисистемы',
			id: 'combisystems'
		},
		{
			name: 'Корнеудалители',
			id: 'root_removers'
		},
		{
			name: 'Тяпки и мотыги',
			id: 'hoes'
		},
		{
			name: 'Вилы',
			id: 'pitchfork'
		},
		{
			name: 'Косы и серпы',
			id: 'scythes_and_sickles'
		},
		{
			name: 'Ножи',
			id: 'knives'
		},
		{
			name: 'Косы',
			id: 'scythes'
		}
	],
	electro_benzo_tools: [
		{
			name: 'Электроинструмент',
			id: 'power_tools'
		},
		{
			name: 'Садовая техника',
			id: 'garden_equipment'
		},
		{
			name: 'Сварочное оборудование',
			id: 'welding_equipment'
		},
		{
			name: 'Строительное оборудование',
			id: 'construction_equipment'
		},
		{ name: 'Станки', id: 'machines' }
	],
	auto_chemistry: [
		{
			id: 'motor_chemistry',
			name: 'Мотохимия'
		},
		{
			id: 'auto_chemistry',
			name: 'Автохимия'
		}
	],
	spare_parts: [
		{
			id: 'auto_parts',
			name: 'Автозапчасти'
		},
		{
			id: 'motorcycle_parts',
			name: 'Мотозапчасти'
		}
	]
}
