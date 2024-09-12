/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			lg: { min: '0px', max: '1024px' },
		},

		extend: {
			backgroundImage: {
				btnGradient: 'linear-gradient(172deg, #ff7b4e 0%, #ff584e 100%);',
			},
		},
	},
	plugins: [],
};
