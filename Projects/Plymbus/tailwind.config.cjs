/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx}',
		'.src/components/**/*.{html,jsx,js}',
		'./index.html',
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				'dark-brown': '#402923',
				'light-brown': '#6b4e42',
				'lighter-brown': '#9d7e6f',
			},
		},
		screens: {
			sm: '400px',
			md: '800px',
			pc: '1200px',
		},
		fontSize: {
			heading: [
				'5vw',
				{
					fontWeight: '700',
				},
			],
		},
	},
}
