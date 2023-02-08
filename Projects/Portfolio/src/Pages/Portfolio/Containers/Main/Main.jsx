import React from 'react'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'

export default function Main(props) {
	return (
		<main className='px-[20vw] pb-[10vw] py-[15vh] flex flex-col justify-center items-center gap-[2rem]'>
			<AboutMe
				refAboutMe={props.refAboutMe}
				ScrollToProjects={props.ScrollToProjects}
			/>
			<Projects
				refProjects={props.refProjects}
				isProjectOpened={props.isProjectOpened}
				setIsProjectOpened={props.setIsProjectOpened}
			/>
		</main>
	)
}
