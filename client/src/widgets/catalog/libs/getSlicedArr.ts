import type { TCard } from '@/entities/card'

const SUBARRAY_SIZE = 9

export const getSlicedArr = (arr: TCard[]) => {
	const formattedArr: TCard[][] = []

	let index = 0

	while (arr.length / SUBARRAY_SIZE > index) {
		formattedArr.push(
			arr.slice(index * SUBARRAY_SIZE, (index + 1) * SUBARRAY_SIZE)
		)
		index++
	}

	return formattedArr
}
