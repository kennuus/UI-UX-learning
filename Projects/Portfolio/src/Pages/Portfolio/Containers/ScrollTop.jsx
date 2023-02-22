import React from 'react'
import { useState } from 'react'
import { arrowTopSVG } from '../../../../public/Portfolio/Svgs'

export default function ScrollTop(props) {
	const [showBtn, setShow] = useState(false)
	window.addEventListener(
		'load',
		(window.onscroll = function () {
			document.documentElement.scrollTop < 600 ? setShow(false) : setShow(true)
		})
	)

	return (
		showBtn && (
			<button
				onClick={() => {
					props.refTop.current.scrollIntoView({ behavior: 'smooth' })
				}}
				aria-label='Scroll to top'
				className={`
				fixed right-[1rem] pc:right-[3vh] bottom-[1rem] pc:bottom-[3vh] transition-all w-[48px] h-[48px] pc:hover:scale-125 pc:active:scale-110`}
			>
				{arrowTopSVG}
			</button>
		)
	)
}
