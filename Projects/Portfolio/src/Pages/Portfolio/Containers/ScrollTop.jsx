import React from 'react'
import { useState } from 'react'
import { arrowTopSVG } from '../../../../public/Portfolio/Svgs'

export default function ScrollTop(props) {
	const [showBtn, setShow] = useState(false)
	window.addEventListener(
		'load',
		(window.onscroll = function () {
			document.documentElement.scrollTop < 100 ? setShow(false) : setShow(true)
		})
	)

	return (
		showBtn && (
			<button
				onClick={() => {
					props.refTop.current.scrollIntoView({ behavior: 'smooth' })
				}}
				aria-label='Scroll to top'
				className='fixed bottom-[1rem] right-[1rem] pc:bottom-[3vh] pc:right-[3vh] 
				flex items-center justify-center
				w-[48px] h-[48px] pc:hover:scale-125 pc:active:scale-110'
			>
				{arrowTopSVG}
			</button>
		)
	)
}
