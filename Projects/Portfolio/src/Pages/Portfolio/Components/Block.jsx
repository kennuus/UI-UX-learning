import React from 'react'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className={`${
				props.item.header === 'Welcome!' && ' py-[6rem] pc:py-[10vh] h-[90vh] '
			} flex flex-col items-center relative min-h-[100vh] `}
		>
			{props.item.header === 'Welcome!' ? (
				<h1 className='text-[4rem] pc:text-[5.8vw] mb-[3rem] pc:mb-[7.5vh]'>
					{props.item.header}
				</h1>
			) : (
				<h2 className='text-[3rem] pc:text-[4vw] mb-[3rem] pc:mb-[7.5vh]'>
					{props.item.header}
				</h2>
			)}
			{props.children}
		</section>
	)
}
