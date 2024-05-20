import cl from './index.module.css'

export const getElementClass = (
	itemIndex: number,
	subArrIndex: number
): string => {
	if (subArrIndex % 2 === 0) {
		if (itemIndex === 1) {
			return cl.left
		}
	} else {
		if (itemIndex === 3) {
			return cl.right
		}
	}
	return ''
}
