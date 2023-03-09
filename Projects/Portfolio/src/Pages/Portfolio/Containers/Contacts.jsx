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
		<footer className='h-[10vh] dark:text-white z-10 flex flex-col items-center'>
			<nav className='flex h-[100%] justify-center dark:bg-black'>
				<ul className='flex pc:gap-[3vw] pc:w-[20vw] w-[50vw] justify-between'>
					{linksList.map((item, i) => (
						<li className='flex items-center' key={i}>
							<SmallButton>
								<a
									target='_blank'
									className=' dark:text-white-3 text-black-2 pc:hover:text-black pc:dark:hover:text-white-1 transition-colors '
									href={item.link}
								>
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
