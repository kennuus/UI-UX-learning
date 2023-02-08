import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function Window({ children, state }) {
	return (
		<div
			className='fixed top-40 right-[20vw] left-[20vw] bottom-40 
			flex flex-col
			 bg-white dark:bg-bar-black dark:border-bar-border-black border-bar-border-white border-[3px]
			 px-8 py-16 rounded-md z-[1000] '
		>
			<button
				onClick={() => {
					state(false)
				}}
				className='w-max h-max dark:bg-bar-black bg-white absolute bottom-8 left-8'
			>
				<ChevronLeftIcon className='w-8' />
			</button>
			{children}
		</div>
	)
}
