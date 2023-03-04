import React from 'react'
import {
	githubSVG,
	telegramSVG,
	upworkSVG,
} from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

export default function Contacts() {
	const linksList = [
		{
			svg: githubSVG,
			link: 'https://github.com/kennuuss',
		},
		{
			svg: telegramSVG,
			link: 'https://t.me/kennuuss',
		},
		{
			svg: upworkSVG,
			link: 'https://www.upwork.com/freelancers/~01b7322956d1e3f011',
		},
	]
	return (
		<footer className='h-[10vh] left-0 right-0 dark:text-white'>
			<nav className='flex h-[100%] justify-center dark:bg-black'>
				<ul className='flex pc:gap-[3vw] pc:w-[20vw] w-[50vw] justify-between'>
					{linksList.map((item, i) => (
						<li className='flex items-center' key={i}>
							<SmallButton>
								<a target='_blank' href={item.link}>
									{item.svg}
								</a>
							</SmallButton>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}
