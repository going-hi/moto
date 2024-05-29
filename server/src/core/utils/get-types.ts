export const getTypes = (objectWithEnum: object) => {
	const array = []
	for (const key in objectWithEnum) {
		const values = Object.values(objectWithEnum[key])
		array.push(...values)
	}
	return array
}
