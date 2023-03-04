import React, { useRef } from 'react'
import {
	ScrollTop,
	ThemeSwitcher,
	AboutMe,
	Projects,
	Contacts,
	MoreAboutMe,
} from '../../../public/Portfolio/Containers'
import { Block } from '../../../public/Portfolio/Components'

export default function Portfolio() {
	const blockRefs = useRef([]).current

	const projects = [
		{
			title: 'Restaurant',
			path: '/Restaurant',
		},
	]
	const blocksList = [
		{
			header: 'Welcome!',
			component: <AboutMe blockRefs={blockRefs} />,
		},
		{
			header: 'More About Me',
			component: <MoreAboutMe />,
		},
		{
			header: 'Projects',
			contentHeader: projects[0].title,
			component: <Projects projects={projects} />,
		},
	]
	return (
		<>
			<main className='flex flex-col gap-[6rem] pb-[6rem] pc:gap-[15vh] pc:pb-[10vh] dark:bg-black dark:text-white'>
				{blocksList.map((item, i) => (
					<Block
						item={item}
						key={i}
						blockRef={(block) => blockRefs.push(block)}
					>
						{item.component}
					</Block>
				))}
			</main>
			<Contacts />
			<ThemeSwitcher blockRefs={blockRefs} />
			<ScrollTop blockRefs={blockRefs} />
		</>
	)
}
