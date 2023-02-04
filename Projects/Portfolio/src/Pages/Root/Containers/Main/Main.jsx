import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'

export default function Main(props) {
	return (
		<main className='px-[20vw] py-[10vh] flex flex-col justify-center items-center gap-[4rem]'>
			<AboutMe refAboutMe={props.refAboutMe} />
			<Projects refProjects={props.refProjects}/>
		</main>
	)
}
