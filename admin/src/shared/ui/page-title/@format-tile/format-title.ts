export const formatTitle = (title: string) => {
	let formattedTitle = title.slice(0, 25)

	if (title.length > 25) {
		formattedTitle += '...'
	}

	return formattedTitle
}
