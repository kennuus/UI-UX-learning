import React, { useState } from 'react'
import { arrowDownSVG } from '../../../../public/Portfolio/Svgs'

function AboutMe(props) {
	const [isMoreAboutMeOpened, setIsMoreAboutMeOpened] = useState(false)

	return (
		<>
			<h3>I am a UI-UX designer</h3>

			{/* more about me */}
			<button
				ref={props.aboutMeRef}
				onClick={
					() =>
						props.moreAboutMeRef.current.scrollIntoView(
							{behavior: 'smooth'}
						) /* setIsMoreAboutMeOpened(!isMoreAboutMeOpened) */
				}
			>
				More About Me
			</button>
			{isMoreAboutMeOpened && (
				<>
					<h3>My main goals are:</h3>
					<ul className='text-center'>
						<li>To enjoy the process.</li>
						<li>Observe all customer instructions.</li>
						<li>Reach new design horizons.</li>
					</ul>
				</>
			)}

			{/* scroll */}
			<button
				onClick={() =>
					props.projectsRef.current.scrollIntoView({ behavior: 'smooth' })
				}
				className='w-8 pc:w-[3vw] p-0 pc:hover:scale-125 pc:active:scale-110 absolute bottom-[25vh] dark:hover:bg-black
				bg-white
				dark:bg-black'
				aria-label='Scroll to projects'
			>
				{arrowDownSVG}
			</button>
		</>
	)
}

export default AboutMe
