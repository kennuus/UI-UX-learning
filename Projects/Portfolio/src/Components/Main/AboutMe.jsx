import React from 'react'
import { useState } from 'react'

function AboutMe() {
	const [IsOpened, setIsOpened] = useState(false)

	const AboutMeFull = () => {
		return (
			<h3
				className=' dark:text-white text-black  mx-auto 
			md:text-[0.8em] text-md'
			>
				{/* My name is&nbsp;
				<span className='font-bold'>Sabina</span>
				.<br /> */}
				I`m learning UI&UX for&nbsp;
				<span className='font-bold whitespace-nowrap'>6 months</span>
				.<br />
				I created this web site as an example of project.
				<br />
			</h3>
		)
	}

	return (
		<div className='flex flex-col pt-6 gap-2 text-[18px]'>
			<h3>
				I am a&nbsp;
				<span className='font-bold whitespace-nowrap'>UI-UX designer.</span>
			</h3>

			<button
				onClick={() => setIsOpened(!IsOpened)}
				className='relative  dark:bg-white dark:text-black  bg-black text-white rounded-sm px-[1.6vw] mx-auto whitespace-nowrap'
			>
				<span
					className='absolute left-[-20px] 
				text-black dark:text-white'
				>
					{IsOpened ? '▾' : '▸'}
				</span>
				&nbsp; More About Me &nbsp;
			</button>
			{IsOpened ? AboutMeFull() : ''}
		</div>
	)
}

export default AboutMe
