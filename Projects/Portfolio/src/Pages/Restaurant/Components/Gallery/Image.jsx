import React from 'react'

export default function Image({ image }) {
	return (
		<div className='w-[100%] h-[70vh]  bg-gray-300 rounded-md'>
			<img
				src={image}
				className='rounded-md w-[100%] h-[100%] text-black text-[1.5rem] text-center'
				alt='Image is no more avilable'
			/>
		</div>
	)
}
