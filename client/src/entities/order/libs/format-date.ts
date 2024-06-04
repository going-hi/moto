export const formatDate = (date: string) =>
	date
		.substring(0, 10)
		.split('-')
		.reverse()
		.reduce((i, acc) => i + acc + '.', '')
		.substring(0, 10)
