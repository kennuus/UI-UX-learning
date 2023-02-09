import React from 'react'

export default function Dot(props) {
	return (
		<button
			onClick={() => props.setImg(props.index)}
			className='
			flex justify-center items-center 
			mx-3 pc:mx-1 rounded-full bg-white 
			w-3 h-3'
		>
			{props.isActive && (
				<span
					className='h-[60%] w-[60%] rounded-full
				 bg-light-brown dark:bg-dark-brown'
				/>
			)}
		</button>
	)
}
