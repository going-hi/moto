export const removeRelation = (
	obj: { [key: string]: number },
	fieldName: string
) => {
	if (fieldName) {
		const data = obj[fieldName]

		if (data) {
			// @ts-expect-error
			obj[fieldName] = data.id
		}
	}

	return obj
}
