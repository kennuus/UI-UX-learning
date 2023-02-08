import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useState } from 'react'
import Window from '../../Components/Window'

function AboutMe(props) {
	const date = new Date()
	let month = date.getMonth()
	let year = date.getFullYear() - 2022

	const [IsOpened, setIsOpened] = useState(false)

	return (
		<div
			ref={props.refAboutMe}
			className='flex flex-col items-center relative pc:gap-[0.5rem] gap-[1rem] h-[100vh]'
		>
			<h2>Hello</h2>

			<h3 className='mt-[1rem]'>I am a UI-UX designer</h3>

			<button
				onClick={() => setIsOpened(!IsOpened)}
				className='whitespace-nowrap
				'
			>
				More About Me
			</button>
			{IsOpened ? (
				<div className=''>
					<div className='sm:hidden block'>
						<Window state={setIsOpened}>
							<p className='text-center'>
								<span className='font-bold'>My main goals are:</span>
								<ul className='mt-4'>
									<li>• To enjoy the process.</li>
									<li>• Observe all customer instructions and user notes.</li>
									<li>• Reach new design horizons.</li>
								</ul>
							</p>
						</Window>
					</div>
					<p className='text-center sm:block hidden'>
						<span className='font-bold'>My main goals are:</span>
						<ul>
							<li>• To enjoy the process.</li>
							<li>• Observe all customer instructions and user notes.</li>
							<li>• Reach new design horizons.</li>
						</ul>
					</p>
				</div>
			) : (
				''
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
