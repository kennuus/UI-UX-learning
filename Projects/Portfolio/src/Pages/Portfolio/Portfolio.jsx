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
			description:
				'A warm and pleasant space to spend time with friends or family.',
			path: '/Restaurant',
			btnText: 'Make an order',
		},
	]
	const blocksList = [
		{
			header: 'Welcome!',
			component: <AboutMe blockRefs={blockRefs} />,
		},
		{
			header: 'About Me',
			component: <MoreAboutMe blockRefs={blockRefs} />,
		},
		{
			header: 'Projects',
			component: <Projects projects={projects} />,
		},
	]
	return (
		<>
			<main className='flex flex-col gap-[6rem] pc:gap-[15vh]  dark:bg-black dark:text-white'>
				{blocksList.map((item, i) => (
					<Block
						item={item}
						key={i}
						blockRef={(block) => blockRefs.push(block)}
					>
						{item.component}
					</Block>
				))}
				<Contacts />
			</main>
			<ThemeSwitcher blockRefs={blockRefs} />
			<ScrollTop blockRefs={blockRefs} />
		</>
	)
}
