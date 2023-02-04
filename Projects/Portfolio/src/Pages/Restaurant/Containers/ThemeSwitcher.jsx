import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

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
		<li className='pc:block hidden ml-4' >
			<button
				className='flex '
				onClick={() => themeSwitch()}
				aria-label='change Theme'
			>
				<MoonIcon className='block dark:hidden' />
				<SunIcon className='dark:block hidden' />
			</button>
		</li>
	)
}
