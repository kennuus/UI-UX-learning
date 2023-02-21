import Block from './Components/Block'
import ScrollTop from './Containers/ScrollTop'
import ThemeSwitcher from './Containers/ThemeSwitcher'
import SideBar from './Containers/Navigation/SideBar'
import AboutMe from './Containers/Main/AboutMe'
import Projects from './Containers/Main/Projects'
import React, { useRef, useState } from 'react'
import Hamburger from './Containers/Navigation/Hamburger'
import { userSVG, projectsSVG } from '../../../public/Portfolio/Svgs'

export default function Portfolio() {
	const [isSideBarShow, setIsSideBarShow] = useState(false)
	const refTop = useRef()
	const projectsRef = useRef()
	const refProject = useRef()
	const projects = [
		{
			title: 'Restaurant',
			upwork: false,
			ref: refProject,
			image: 'restaurant_preview.png',
			path: '/Restaurant',
			imgAlt: 'Brooklyn`s Restaurant',
		},
	]

	const refsList = [
		{
			header: 'Hello!',
			ref: useRef(),
			content: true,
			component: <AboutMe projectsRef={projectsRef} />,
			svg: userSVG,
		},
		{
			header: 'Projects',
			ref: projectsRef,
			content: true,

			component: <Projects projects={projects} refProject={refProject} />,
			svg: projectsSVG,
		},
	]

	return (
		<>
			<main
				ref={refTop}
				className={`${
					isSideBarShow && ' hidden '
				} py-[15vh] pc:w-[80vw] pc:absolute pc:right-0 flex flex-col justify-center items-center gap-[2rem] dark:bg-black`}
			>
				{refsList.map((item, index) => (
					<Block itemRef={item.ref} {...item} key={index} />
				))}
			</main>

			<Hamburger
				isSideBarShow={isSideBarShow}
				setIsSideBarShow={setIsSideBarShow}
			/>

			<ThemeSwitcher />

			<SideBar
				refsList={refsList}
				projects={projects}
				isSideBarShow={isSideBarShow}
				setIsSideBarShow={setIsSideBarShow}
			/>

			<ScrollTop refTop={refTop} />
		</>
	)
}
