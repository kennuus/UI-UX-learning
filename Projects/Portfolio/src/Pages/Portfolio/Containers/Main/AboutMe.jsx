import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useState } from 'react'

function AboutMe(props) {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div
			ref={props.refAboutMe}
			className='flex flex-col items-center relative pc:gap-[0.5rem] gap-[1rem] h-[100vh]'
		>
			<h2>Hello</h2>

			<h3>I am a UI-UX designer</h3>

			<button onClick={() => setIsOpened(!isOpened)} className='whitespace-nowrap'>
				More About Me
			</button>
			{isOpened && (
				<p className='text-center'>
					<span className='font-bold'>My main goals are:</span>
					<ul>
						<li>• To enjoy the process.</li>
						<li>• Observe all customer instructions and user notes.</li>
						<li>• Reach new design horizons.</li>
					</ul>
				</p>
			)}
			<button
				onClick={props.ScrollToProjects}
				className='w-8 h-8 p-0 transition-all pc:hover:scale-125 pc:active:scale-100 absolute bottom-[25vh] bg-white dark:bg-black'
			>
				<ChevronDoubleDownIcon />
			</button>
		</div>
	)
}

export default AboutMe
