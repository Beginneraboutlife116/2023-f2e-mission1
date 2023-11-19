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
					100: '#FDFCFB',
					400: '#F7ECE1',
					900: '#DA7D4A',
				},
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
