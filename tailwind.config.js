/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-primary':
					'linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)',
			},
			colors: {
				white: {
					85: '#FFFFFFD9',
					100: '#FFF',
				},
				theme: {
					1: '#FDFCFB',
					2: '#F7ECE1',
				},
				primary: '#DA7D4A',
			},
			fontSize: {
				sm: ['0.875rem', '1.3125rem'],
				base: ['1rem', '1.5rem'],
				lg: ['1.125rem', '1.6875rem'],
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
			},
			screens: {
				'2xl': '1400px',
			},
		},
	},
	plugins: [],
};
