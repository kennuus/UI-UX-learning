import React from 'react'
import { loadSVG } from '../public/Portfolio/Svgs'

export default function Loading() {
	return (
		<div
			className='flex justify-center items-center 
    h-screen bg-white text-black dark:bg-black dark:text-white'
		>
			<div className='items-center justify-between flex flex-col mb-[10vh] gap-[3vh]'>
				<h1 className='text-[3rem] pc:text-[6vw]'>Loading</h1>
				{loadSVG}
			</div>
		</div>
	)
}
