/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'sky-blue': '#1E213A',
				'sky-dark': '#100E1D',
			},
			fontFamily: {
				'raleway': 'Raleway, sans-serif',
			},
			backgroundImage: {
				'clouds-pattern': "url('./src/assets/img/Cloud-background.png')",
			},
		},
	},
	plugins: [],
}
