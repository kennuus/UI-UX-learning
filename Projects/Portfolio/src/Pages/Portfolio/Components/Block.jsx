import React from 'react'
import { H2 } from './Headlines'

export default function Block(props) {
	return (
		<section
			ref={props.blockRef}
			className='relative flex min-h-[100vh] flex-col items-center py-[3rem] pc:py-[5vh]'
		>
			<H2>{props.item.header}</H2>
			{props.children}
		</section>
	)
}
