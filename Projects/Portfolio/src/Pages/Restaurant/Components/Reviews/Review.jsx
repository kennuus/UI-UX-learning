import React from 'react'
import Line from '../Line'
import Stars from './Stars'

export default function Review(props) {
	return (
		<div
			className='flex pc:flex-row flex-col 
			px-4 py-[1rem]
			rounded-md w-[100%] h-[100%] 
			bg-lighter-brown dark:bg-light-brown'
		>
			<div className={`flex justify-center pc:items-end flex-col`}>
				<h3 className='pc:text-right'>{props.name}</h3>
				<Stars review={props.rate} />
			</div>

			<Line vertical={false} showOnPc={false} />
			<h4 className='text-center pc:text-start flex items-center'>
				<Line vertical={true} showOnPc={true} />
				{props.description}
			</h4>
		</div>
	)
}
