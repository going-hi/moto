/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				container: 'var(--container-width)'
			},
			backgroundColor: {
				beige: 'var(--beige)',
				'red-light': 'var(--red-light)'
			},
			colors: {
				beige: 'var(--beige)'
			}
		},
		letterSpacing: {
			'2per': 'calc(1em / 40)'
		}
	},
	plugins: []
}
