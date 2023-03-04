import React from 'react'
import { sunSVG, moonSVG } from '../../../../public/Portfolio/Svgs'
import SmallButton from '../Components/SmallButton'
import { useState, useEffect } from 'react'

export default function ThemeSwitcher(props) {
	const [showBtn, setShow] = useState(false)

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

	useEffect(() => {
		const handleScroll = () => {
			const topOffset = props.blockRefs[1].offsetTop
			const scrollTop = document.documentElement.scrollTop
			setShow(scrollTop > topOffset)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [props.topRef])

	return (
		showBtn && (
			<SmallButton
				className=' top-[1.6rem] right-[1.6rem] pc:top-[4vh] pc:right-[4vh] fixed dark:text-white '
				onClick={() => themeSwitch()}
				role='switch'
				aria={`Switch Theme to ${
					document.documentElement.classList.contains('dark')
						? ' light'
						: ' dark'
				}`}
			>
				{sunSVG}
				{moonSVG}
			</SmallButton>
		)
	)
}
