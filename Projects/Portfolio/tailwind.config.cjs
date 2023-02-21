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

				'black': 'rgb(25,25,25)',
				'bar-black': 'rgb(32,32,32)',
				'bar-border-black': 'rgb(46,46,46)',
				'light-black': 'rgb(39,39,39)',
				'lighter-black': 'rgb(51,51,51)',
				'lighter-black+1': 'rgb(63,63,63)',
				'lighter-black+2': 'rgb(75,75,75)',
				'gray-black': 'rgb(149,148,149)',

				'bar-white': 'rgb(251,251,250)',
				'bar-border-white': 'rgb(245,245,245)',
				'bar-border-white-1': 'rgb(235,235,235)',
				'bar-border-white-2': 'rgb(226,226,226)',
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
