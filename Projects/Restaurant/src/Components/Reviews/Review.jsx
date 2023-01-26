import React from 'react'
import Stars from './Stars'

export default function Review(props) {
	return (
		<div
			className='flex flex-col text-center m-1
		 bg-gray-200 w-[24vw] h-max p-2 rounded-md cursor-pointer
		 hover:bg-opacity-75 active:bg-gray-300 transition'
		>
			<h2 className='text-[2vw] font-bold'>{props.name}</h2>
			<Stars review={props.rate} />
			<h3 className='text=[1.6vw]'>{props.description}</h3>
		</div>
	)
}
