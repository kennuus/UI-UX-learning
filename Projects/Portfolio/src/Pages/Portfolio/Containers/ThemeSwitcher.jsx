import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

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
			aria-label='theme switcher'
			className='ml-[3rem] w-[32px]
      pc:hover:scale-125 pc:active:scale-100 transition-all'
		>
			<SunIcon className='dark:block hidden' />
			<MoonIcon className='dark:hidden' />
		</button>
	)
}
