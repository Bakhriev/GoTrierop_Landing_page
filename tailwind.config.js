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
				greenGradient:
					'linear-gradient(30deg, rgba(66,142,95,1) 0%, rgba(17,33,32,1) 100%);',
				heroClip: 'url(/public/hero-clip.svg)',
			},
		},
	},
	plugins: [],
};
