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
				'red-light': 'var(--red-light)',
				modal: 'rgba(0, 0, 0, 0.3)'
			},
			colors: {
				beige: 'var(--beige)',
				'red-light': 'var(--red-light)',
				'gray-light': 'var(--gray-light)',
				'gray-dark': 'var(--gray-dark)'
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
		},
		keyframes: {
			spin: {
				'0%': {
					transform: 'rotate(0deg)'
				},
				'100%': {
					transform: 'rotate(360deg)'
				}
			}
		},
		animation: {
			'spin-1000': 'spin 1s linear infinite'
		}
	},
	plugins: []
} satisfies Config
