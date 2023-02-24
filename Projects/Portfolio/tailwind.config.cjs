/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{js,jsx}',
		'.src/components/**/*.{html,jsx,js}',
		'./index.html',
	],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {
			colors: {
				/* restaurant */
				'dark-brown': '#402923',
				'light-brown': '#6b4e42',
				'lighter-brown': '#9d7e6f',

				/* portfolio - dark theme */
				black: 'rgb(25,25,25)',
				'black-1': 'rgb(39,39,39)',
				'black-2': 'rgb(51,51,51)',
				'gray-black': 'rgb(149,148,149)',

				/* portfolio - white theme */
				'white-1': 'rgb(245,245,245)',
				'white-2': 'rgb(235,235,235)',
				'white-3': 'rgb(226,226,226)',
				'gray-white': 'rgb(116,115,110)',
			},
		},
		screens: {
			sm: '500px',
			md: '800px',
			pc: '1200px',
		},
	},
}
