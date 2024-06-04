export const generateRandomCode = () => {
	const max = 999999
	const min = 100000
	return Math.round(Math.random() * (max - min) + min)
}
