import React, { useRef, useState } from 'react'
import {
	ScrollTop,
	ThemeSwitcher,
	SideLine,
	AboutMe,
	Projects,
	Contacts,
	MoreAboutMe,
} from '../../../public/Portfolio/Containers'
import { Block } from '../../../public/Portfolio/Components'

export default function Portfolio() {
	/* states */
	const [isSideBarShow, setIsSideBarShow] = useState(false)

	/* refs */
	const refTop = useRef()
	const projectsRef = useRef()
	const contentRef = useRef()
	const aboutMeRef = useRef()
	const moreAboutMeRef = useRef();

	/* lists */

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
			contentHeader: 'More About Me',
			component: (
				<AboutMe
					projectsRef={projectsRef}
					aboutMeRef={aboutMeRef}
					moreAboutMeRef={moreAboutMeRef}
				/>
			),
		},
		{
			header: 'More About Me',
			ref: moreAboutMeRef,

			component: <MoreAboutMe />,
		},
		{
			header: 'Projects',
			ref: projectsRef,
			contentHeader: projects[0].title,
			contentRef: contentRef,

			component: <Projects projects={projects} contentRef={contentRef} />,
		},
	]

	return (
		<>
			<main
				ref={refTop}
				className={`py-[15vh] flex flex-col justify-center relative items-center gap-[2rem] dark:bg-black`}
			>
				{refsList.map((item, index) => (
					<Block itemRef={item.ref} {...item} key={index} />
				))}
				<SideLine
					refsList={refsList}
					projects={projects}
					isSideBarShow={isSideBarShow}
					setIsSideBarShow={setIsSideBarShow}
				/>
			</main>

			<Contacts />
			<ThemeSwitcher />
			<ScrollTop refTop={refTop} />
		</>
	)
}
