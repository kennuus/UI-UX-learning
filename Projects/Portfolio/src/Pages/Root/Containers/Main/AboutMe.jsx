import React from 'react'
import { useState } from 'react'

function AboutMe() {
	const [IsOpened, setIsOpened] = useState(false)

	const AboutMeFull = () => {
		return (
			<p
				className='dark:text-white text-black  mx-auto 
			md:text-[0.8em] text-md'
			>
			</p>
		)
	}

	return (
		<div className='flex flex-col pc:gap-[0.5rem] gap-[1rem]'>
			<h1>Hello!</h1>

			<h3>I am a UI-UX designer.</h3>

			<button
				onClick={() => setIsOpened(!IsOpened)}
				className='relative whitespace-nowrap'
			>
				<span className='absolute left-[-20px] text-black dark:text-white'>
					{IsOpened ? '▾' : '▸'}
				</span>
				More About Me
			</button>
			{IsOpened ? AboutMeFull() : ''}
		</div>
	)
}

export default AboutMe
