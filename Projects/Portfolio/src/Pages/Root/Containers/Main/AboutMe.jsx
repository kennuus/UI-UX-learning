import React from 'react'
import { useState } from 'react'

function AboutMe(props) {
	const [IsOpened, setIsOpened] = useState(false)

	return (
		<div ref={props.refAboutMe} className='flex flex-col pc:gap-[0.5rem] gap-[1rem] h-[60vh]'>
			<h1>Hello!</h1>

			<h3 className='mt-[1rem]'>I am a UI-UX designer</h3>

			<button
				onClick={() => setIsOpened(!IsOpened)}
				className='relative whitespace-nowrap w-max mx-auto'
			>
				More About Me
			</button>
			{IsOpened ? (
				<p className='dark:text-white text-black'>
					сыр сыр сыр сыр сыр сыр сыр сыр сыр{' '}
				</p>
			) : (
				''
			)}
		</div>
	)
}

export default AboutMe
