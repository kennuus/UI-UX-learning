import React from 'react'

export default function Row({ title }) {
	return (
		<div className='block my-[3vw] text-white'>
			<h2 /* title */ className='text-[1.4vw] mx-[4%] mb-[0.5em]'>
				<a>{title}</a>
			</h2>
			<div /* slider */ className='px-[4%]'>
				<img className='pr-[4px] w-[50%] sm:w-[33%] md:w-[25%]' src='Main/Trailer/bg.webp' alt='series' />
			</div>
		</div>
	)
}
