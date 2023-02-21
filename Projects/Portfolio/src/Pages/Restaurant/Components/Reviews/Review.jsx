import React from 'react'
import Line from '../Line'
import Stars from './Stars'

export default function Review(props) {
	return (
		<div
			className='flex flex-col relative
			px-4 py-[1rem]
			rounded-md w-[100%] h-[100%] 
			bg-lighter-brown dark:bg-light-brown'
		>
			<div className='flex justify-center flex-col'>
				<h3>{props.name}</h3>
				{/* <Stars review={props.rate} /> */}
			</div>

			<Line vertical={false} />
			{/* <span className='pc:hidden block'>
			</span> */}
			{/* <span className='pc:block hidden h-[100%] absolute left-[30%]'>
				<Line vertical={true} />
			</span> */}
			<h4>
				{props.description}
			</h4>
		</div>
	)
}
