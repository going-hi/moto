export const removeRelations = (
	items: { [key: string]: string | number | { id: number } }[],
	fieldName: string
) => {
	return items.map(i => {
		if (fieldName) {
			const obj = i[fieldName]
			i[fieldName] = typeof obj === 'object' ? obj.id : ''
		}

		return i
	})
}
