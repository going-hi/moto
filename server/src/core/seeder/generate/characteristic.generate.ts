import { CharacteristicEntity } from '@/modules/characteristic/entities'

export function characteristicGenerateByFilter(filter: object) {
	const characteristics = []
	Object.keys(filter).forEach(key => {
		if (key === 'цена') return
		const char = new CharacteristicEntity()
		char.key = key
		const value = filter[key][Math.floor(Math.random() * filter[key].length)]
		char.value = value
		characteristics.push(char)
	})
	return characteristics
}
