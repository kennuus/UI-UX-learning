import React from 'react'
import { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export default function ScrollOnTopBtn(props) {
	const [showBtn, setShow] = useState(false)
	window.onscroll = function () {
		scrollTopChecker200Px()
	}

	const scrollTopChecker200Px = () => {
		document.documentElement.scrollTop < 200 ? setShow(false) : setShow(true)
	}

	const btn = () => {
		return (
			<button
				onClick={props.ScrollToTop}
				className='
				fixed right-6 bottom-[60%]
				pc:bottom-6
				flex items-center justify-center
        rounded-full pc:hover:scale-125 pc:active:scale-100 hover:duration-100'
			>
				<ChevronUpIcon
					className='
					dark:text-white text-black
					pc:w-[32px] w-[64px]'
				/>
			</button>
		)
	}
	return showBtn ? btn() : ''
}
