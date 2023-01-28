import React from 'react'

export default function Image({ image }) {
	return (
		<div className='w-[100%] h-[70vh]  bg-gray-300 rounded-lg'>
			<img
				src={image}
				className='rounded-lg w-[100%] h-[100%]'
				alt='Image is no more avilable'
			/>
		</div>
	)
}
