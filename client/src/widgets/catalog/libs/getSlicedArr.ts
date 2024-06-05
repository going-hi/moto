import type { TCard, TCardsDto } from '@/entities/card'

const SUBARRAY_SIZE = 9

export const getSlicedArr = (arr: TCardsDto[]) => {
	const totalArr: TCard[][] = []

	const formattedArr = arr.reduce<TCard[]>(
		(acc, i) => (i ? [...acc, ...i.items] : [...acc, i]),
		[]
	)

	let index = 0

	while (formattedArr.length / SUBARRAY_SIZE > index) {
		totalArr.push(
			formattedArr.slice(
				index * SUBARRAY_SIZE,
				(index + 1) * SUBARRAY_SIZE
			)
		)
		index++
	}

	return totalArr
}
