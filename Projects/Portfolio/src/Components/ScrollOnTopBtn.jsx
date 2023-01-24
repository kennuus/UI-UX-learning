import React from 'react'
import { useState } from 'react'

export default function ScrollOnTopBtn() {
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
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className='fixed right-6 bottom-[340px]
				dark:text-black dark:bg-white bg-black text-white 
        rounded-full flex items-center justify-center
        h-14 w-14 md:h-10 md:w-10 md:hover:scale-125 md:active:scale-100 hover:duration-100 md:bottom-6
      '
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-8 h-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4.5 15.75l7.5-7.5 7.5 7.5'
					/>
				</svg>
			</button>
		)
	}
	return showBtn ? btn() : ''
}
