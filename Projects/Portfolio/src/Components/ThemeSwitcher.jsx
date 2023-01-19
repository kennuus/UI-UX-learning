import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

export default function ThemeSwitcher() {
	const setDarkTheme = () => {
		document.documentElement.classList.add('dark')
	}
	const setLightTheme = () => {
		document.documentElement.classList.remove('dark')
	}

	window.matchMedia('(prefers-color-scheme: dark)').matches
		? setDarkTheme()
		: setLightTheme()

	const themeSwitch = () => {
		document.documentElement.classList.contains('dark')
			? setLightTheme()
			: setDarkTheme()
	}

	return (
		<button
			onClick={() => themeSwitch()}
			role='switch'
			aria-label='theme switcher'
			className='fixed right-6 top-6  hover:duration-100
      md:h-[30px] md:w-[30px] h-[38px] w-[38px] md:hover:scale-125 md:active:scale-100'
		>
			<SunIcon className='dark:block hidden' />
			<MoonIcon className='dark:hidden' />
		</button>
	)
}
