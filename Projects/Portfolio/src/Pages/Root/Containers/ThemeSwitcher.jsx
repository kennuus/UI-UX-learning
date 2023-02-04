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

	window.addEventListener('load', () => {
		/* when websites starts */
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? setTheme('dark')
			: setTheme('light')

		/* at the time of work */
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				e.matches ? setTheme('dark') : setTheme('light')
			})
	})

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
