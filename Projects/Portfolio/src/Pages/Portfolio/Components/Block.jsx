import React from 'react'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className='py-[3rem] pc:py-[5vh] flex flex-col items-center relative min-h-[100vh]'
		>
			<h2
				className='text-[4rem] text-center pc:text-[5.8vw] 
			mb-[3rem] pc:mb-[5vh]'
			>
				{props.item.header}
			</h2>
			{props.children}
		</section>
	)
}
