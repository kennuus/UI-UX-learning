import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

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
		<li>
			<button onClick={() => themeSwitch()}>
        <MoonIcon className='w-[32px] h-[32px] block dark:hidden' />
        <SunIcon className='w-[32px] h-[32px] dark:block hidden'/>
			</button>
		</li>
	)
}
