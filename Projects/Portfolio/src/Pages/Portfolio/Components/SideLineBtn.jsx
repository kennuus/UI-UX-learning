import React, { useState } from 'react'

export default function SideLineBtn(props) {
	const [showText, setShowText] = useState(false)
	return (
		<button
			onClick={() =>
				props.mainBtn
					? props.ref.current.scrollIntoView({ behavior: 'smooth' })
					: props.contentRef.current.scrollIntoView({ behavior: 'smooth' })
			}
			onMouseEnter={() => setShowText(true)}
			onMouseLeave={() => setShowText(false)}
			className={`rounded-full flex items-center relative pc:text-[1.4vw] w-2 h-2 p-2
			 ${props.mainBtn && ' mb-1  '} bg-black dark:bg-white`}
		>
			<span className='hidden pc:absolute left-5 whitespace-nowrap'>
				{showText && !props.mainBtn && props.contentHeader}
				{props.mainBtn && props.header}
			</span>
		</button>
	)
}
