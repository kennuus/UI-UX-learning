import React from 'react'
import { sunSVG, moonSVG
 } from '../../../../public/Portfolio/Svgs'

export default function ThemeSwitcher() {
	const setTheme = (themeName) => {
		themeName === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	const themeSwitch = () => {
		document.documentElement.classList.contains('dark')
			? setTheme('light')
			: setTheme('dark')
	}

	return (
		<button
			onClick={() => themeSwitch()}
			role='switch'
			aria-label={`Switch Theme to ${
				document.documentElement.classList.contains('dark') ? ' light' : ' dark'
			}`}
			className='pc:w-[3vw] fixed
			w-[48px] h-[48px] flex items-center justify-center pc:hover:scale-125 pc:active:scale-110 pc:top-[4vh] pc:right-[4vh] top-[1rem] right-[1rem]'
		>
			{sunSVG}
			{moonSVG}
		</button>
	)
}
