import React from 'react'

export function H2(props) {
	return (
		<h2 className='mb-[3rem] text-center text-[4rem] pc:mb-[5vh] pc:text-[5.8vw]'>
			{props.children}
		</h2>
	)
}

export function H3(props) {
	return (
		<h3
			className='mb-[1.5rem] text-center text-[2rem] 
  pc:mb-[2.5vh] pc:text-[3.4vw]'
		>
			{props.children}
		</h3>
	)
}
