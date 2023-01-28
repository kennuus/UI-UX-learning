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
			pc: '1200px',
			sm: '400px',
			md: '600px',
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
