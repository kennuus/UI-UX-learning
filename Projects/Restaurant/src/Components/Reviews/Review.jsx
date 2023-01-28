import React from 'react'
import Stars from './Stars'

export default function Review(props) {
	return (
		<div
			className='flex flex-col p-3 m-1
			text-center bg-gray-200 rounded-md
		 	w-[100%] pc:w-[24vw] h-[100%] dark:bg-[rgb(49,64,85)] dark:text-white '
		>
			<h3>{props.name}</h3>

			<Stars review={props.rate} />

			<h4 className='mt-[0.8rem]'>{props.description}</h4>
		</div>
	)
}
