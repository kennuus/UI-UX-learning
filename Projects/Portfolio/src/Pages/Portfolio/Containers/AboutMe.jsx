import React from 'react'
import { useState } from 'react'
import { arrowDownSVG } from '../../../../public/Portfolio/Svgs'

function AboutMe(props) {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<>
			<h3>I am a UI-UX designer</h3>

			<button
				className='portfolio-bigBtn'
				ref={props.aboutMeRef}
				onClick={() => setIsOpened(!isOpened)}
			>
				More About Me
			</button>
			{isOpened && (
				<>
					<h3>My main goals are:</h3>
					<ul className='text-center'>
						<li>To enjoy the process.</li>
						<li>Observe all customer instructions.</li>
						<li>Reach new design horizons.</li>
					</ul>
				</>
			)}

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
