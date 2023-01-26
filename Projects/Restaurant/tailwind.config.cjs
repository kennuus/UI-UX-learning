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
		screens: {
			pc: '1200px'
		},
		fontSize: {
			heading: [
				'6vw',
				{
					fontWeight: '700',
				},
			],
		},
	},
}
