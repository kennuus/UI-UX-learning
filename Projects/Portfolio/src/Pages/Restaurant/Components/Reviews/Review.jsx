import React from 'react'

export default function Review(props) {
	return (
		<div
			className='flex flex-col relative
			px-4 pc:px-[1vw] py-[1rem] pc:py-[3vh]
			rounded-md w-[100%] h-[100%] 
			bg-lighter-brown dark:bg-light-brown'
		>
			{props.children}
		</div>
	)
}
