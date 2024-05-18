const EXPECTED_INDEXES = [3, 10]

export const getElementClass = (i: number): string =>
	EXPECTED_INDEXES.includes(i) || (i - 3) % 18 === 0 || (i - 10) % 18 === 0
		? ''
		: ''
