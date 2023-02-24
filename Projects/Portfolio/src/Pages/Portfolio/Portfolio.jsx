import React, { useRef } from 'react'
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
	/* refs */
	const refTop = useRef()
	const projectsRef = useRef()
	const projectRef = useRef()
	const moreAboutMeRef = useRef()

	/* lists */

	const projects = [
		{
			title: 'Restaurant',
			upwork: false,
			ref: projectRef,
			image: 'restaurant_preview.png',
			path: '/Restaurant',
			imgAlt: 'Brooklyn`s Restaurant',
		},
	]
	const refsList = [
		{
			header: 'Hello!',
			ref: useRef(),
			component: (
				<AboutMe projectsRef={projectsRef} moreAboutMeRef={moreAboutMeRef} />
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
			contentRef: projectRef,

			component: <Projects projects={projects} contentRef={projectRef} />,
		},
	]

	return (
		<>
			<main
				ref={refTop}
				className={`py-[15vh] flex flex-col justify-center relative items-center gap-[2rem] dark:bg-black`}
			>
				{refsList.map((item, index) => (
					<Block {...item} blockRef={item.ref} key={index} >
						<h2>{item.header}</h2>
						{item.component}
					</Block>
				))}
				<SideLine
					refsList={refsList}
					projects={projects}
				/>
			</main>

			<Contacts />
			<ThemeSwitcher />
			<ScrollTop refTop={refTop} />
		</>
	)
}
