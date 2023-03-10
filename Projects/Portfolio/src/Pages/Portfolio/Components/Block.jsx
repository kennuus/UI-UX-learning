import React from 'react'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className='relative flex min-h-[100vh] flex-col items-center py-[3rem] pc:py-[5vh]'
		>
			<h2 className='mb-[3rem] text-center text-[4rem] pc:mb-[5vh] pc:text-[5.8vw]'>
				{props.item.header}
			</h2>
			{props.children}
		</section>
	)
}
