import React, { useState } from 'react'

export default function SideLineBtn(props) {
	const [showText, setShowText] = useState(false)

	return (
		<button
			onClick={() =>
				props.mainBtn
					? props.blockRef.current.scrollIntoView({ behavior: 'smooth' })
					: props.contentRef.current.scrollIntoView({ behavior: 'smooth' })
			}
			onMouseEnter={() => setShowText(true)}
			onMouseLeave={() => setShowText(false)}
			className={`rounded-full flex items-center relative text-[1.2rem] pc:text-[1.4vw] w-2 h-2 p-2
			 ${
					props.mainBtn && props.contentRef && ' mb-2  '
				} bg-gray-white dark:bg-gray-white`}
		>
			<span className='absolute left-5 whitespace-nowrap'>
				{props.mainBtn && props.header}
				{showText && !props.mainBtn && props.contentHeader}
			</span>
		</button>
	)
}
