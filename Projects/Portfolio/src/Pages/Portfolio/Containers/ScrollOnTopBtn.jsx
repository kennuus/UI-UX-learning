import React from 'react'
import { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export default function ScrollOnTopBtn(props) {
	const [showBtn, setShow] = useState(false)
	window.addEventListener(
		'load',
		(window.onscroll = function () {
			document.documentElement.scrollTop < 200 ? setShow(false) : setShow(true)
		})
	)

	return (
		showBtn && (
			<button
				onClick={
					/* props.ScrollToTop */ () => {
						props.ScrollToTop()
					}
				}
				className={`${
					props.isProjectOpened ? 'hidden ' : 'block '
				}fixed right-6 bottom-[60%] pc:bottom-6
		flex items-center justify-center pc:w-[32px] w-[64px] z-[1000]
		rounded-full pc:hover:scale-125 pc:active:scale-100 hover:duration-100`}
			>
				<ChevronUpIcon />
			</button>
		)
	)
}
