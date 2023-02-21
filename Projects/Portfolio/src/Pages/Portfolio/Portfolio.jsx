import React, { useRef, useState } from 'react'
import {
	Hamburger,
	ScrollTop,
	ThemeSwitcher,
	SideBar,
	AboutMe,
	Projects,
} from '../../../public/Portfolio/Containers'
import { Block } from '../../../public/Portfolio/Components'
import { userSVG, projectsSVG } from '../../../public/Portfolio/Svgs'

export default function Portfolio() {
	const [isSideBarShow, setIsSideBarShow] = useState(false)
	const refTop = useRef()
	const projectsRef = useRef()
	const contentRef = useRef()
	const aboutMeRef = useRef()
	const projects = [
		{
			title: 'Restaurant',
			upwork: false,
			ref: contentRef,
			image: 'restaurant_preview.png',
			path: '/Restaurant',
			imgAlt: 'Brooklyn`s Restaurant',
		},
	]

	const refsList = [
		{
			header: 'Hello!',
			ref: useRef(),
			contentRef: aboutMeRef,
			content: true,
			contentHeader: 'More About Me',
			component: <AboutMe projectsRef={projectsRef} aboutMeRef={aboutMeRef} />,
			svg: userSVG,
		},
		{
			header: 'Projects',
			ref: projectsRef,
			content: true,
			contentHeader: projects[0].title,
			contentRef: contentRef,

			component: <Projects projects={projects} contentRef={contentRef} />,
			svg: projectsSVG,
		},
	]

	return (
		<>
			<main
				ref={refTop}
				onTouchStart={() => {
					isSideBarShow && setIsSideBarShow(false)
				}}
				onTouchMove={() => {
					isSideBarShow && setIsSideBarShow(false)
				}}
				className={` py-[15vh] pc:w-[80vw] pc:absolute pc:right-0 flex flex-col justify-center items-center gap-[2rem] dark:bg-black`}
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
