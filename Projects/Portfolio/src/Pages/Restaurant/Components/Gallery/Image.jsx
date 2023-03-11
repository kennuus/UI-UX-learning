import React from 'react'

export default function Image({ image }) {
	return (
		<div className='h-[70vh] w-full  rounded-md bg-gray-300'>
			<img
				src={image}
				className='h-full w-full rounded-md object-cover text-center text-[1.5rem] text-black'
				alt='Image is no more avilable'
			/>
		</div>
	)
}
