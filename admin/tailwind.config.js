/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			aspectRatio: {
				square: '1 / 1'
			}
		}
	},
	plugins: []
}
