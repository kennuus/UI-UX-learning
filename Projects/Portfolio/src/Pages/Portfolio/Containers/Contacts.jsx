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
		<footer className='z-10 flex h-[4rem] flex-col items-center dark:text-white pc:h-[10vh]'>
			<nav className='flex h-[100%] justify-center dark:bg-black'>
				<ul className='flex w-[50vw] justify-between pc:w-[20vw] pc:gap-[3vw]'>
					{linksList.map((item, i) => (
						<li className='flex items-center' key={i}>
							<SmallButton>
								<a
									target='_blank'
									className=' text-black-2 transition-colors dark:text-white-3 pc:hover:text-black pc:dark:hover:text-white-1 '
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
