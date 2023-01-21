/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx}'],
	plugins: [],
	theme: {
		screens: {
			sm: '480px',
			md: '840px',
			lg: '1200px',
			aboutMe: '604px',
		},
		fontSize: {
			heading: [
				'56px',
				{
					fontWeight: '700',
				},
			],
		},
	},
}
