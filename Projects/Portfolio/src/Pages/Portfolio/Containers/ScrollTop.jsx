import React from 'react'
import { useState, useEffect } from 'react'
import { arrowTopSVG } from '../../../../public/Portfolio/Svgs'
import SmallButton from '../Components/SmallButton'

export default function ScrollTop(props) {
	const [showBtn, setShow] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			const topOffset = props.blockRefs[1].offsetTop
			const scrollTop = document.documentElement.scrollTop
			setShow(true && scrollTop > topOffset)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		showBtn && (
			<SmallButton
				onClick={() => {
					props.blockRefs[0].scrollIntoView({ behavior: 'smooth' })
				}}
				aria-label='Scroll to top'
				className={
					' fixed right-[1.6rem] pc:right-[4vh] bottom-[60vh] pc:bottom-[4vh] dark:text-white z-10 '
				}
			>
				{arrowTopSVG}
			</SmallButton>
		)
	)
}
