import React from 'react'
import Stars from './Stars'

export default function Review(props) {
	return (
		<div
			className='flex flex-col gap-[0.5rem]
			text-center m-1 bg-gray-200 p-3 rounded-md
		 	w-[80%] pc:w-[24vw] h-[100%]'
		>
			<h3 className='text-[1.2rem] pc:text-[2vw] font-bold'>
				{props.name}
			</h3>

			<Stars review={props.rate} />

			<small className='text-[1rem] pc:text-[1.2vw]'>
				{props.description}
			</small>
		</div>
	)
}
