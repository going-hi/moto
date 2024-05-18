import type { Config } from 'tailwindcss'

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
				beige: 'var(--beige)',
				'red-light': 'var(--red-light)',
				'gray-light': 'var(--gray-list)'
			}
		},
		letterSpacing: {
			'2per': 'calc(1em / 40)'
		},
		aspectRatio: {
			square: '1 / 1'
		},
		transitionProperty: {
			width: 'width'
		},
		backgroundPosition: {
			'banner-ps': '0 40px'
		},
		backgroundSize: {
			'banner-sz': '100% 110%'
		},
		screens: {
			dhover: { raw: '(hover: hover) and (pointer:fine)' }
		}
	},
	plugins: []
} satisfies Config