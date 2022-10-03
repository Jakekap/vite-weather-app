/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Raleway, sans-serif',
		},
		extend: {
			colors: {
				'sky-blue': '#1E213A',
				'sky-dark': '#100E1D',
				'blue-berry': '#3C47E9',
				'hueso': '#E7E7EB',
				'gris': '#A09FB1',
				'dark-gris': '#6E707A',
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
