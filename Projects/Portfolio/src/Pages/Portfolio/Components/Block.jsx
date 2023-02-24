import React from 'react'

export default function Block(props) {
	return (
		<div
			ref={props.itemRef}
			className='flex flex-col items-center relative pc:gap-[0.5rem] gap-[1rem] h-[100vh]'
		>
			<h2>
				{props.header}
			</h2>
			{props.component}
		</div>
	)
}
