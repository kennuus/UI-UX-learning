import React from 'react'
import {
	githubSVG,
	telegramSVG,
	upworkSVG,
} from '../../../../public/Portfolio/Svgs'

export default function Contacts() {
	const itemsList = [
		{
			svg: githubSVG,
			link: 'https://github.com/kennuuss',
		},
		{
			svg: telegramSVG,
			link: 'https://t.me/kennuuss',
		},
		,
		{
			svg: upworkSVG,
			link: 'https://www.upwork.com/freelancers/~01b7322956d1e3f011',
		},
	]
	return (
		<div className='h-[10vh] pc:block hidden'>
			{' '}
			{/* dark:bg-bar-black border-t-2 dark:border-bar-border-black */}
			<nav className='flex h-[100%] justify-center items-center'>
				<ul className='flex pc:gap-[1vw] gap-[1rem]'>
					{itemsList.map((item, index) => (
						<li className='flex items-center' key={index}>
							<button className='pc:w-[2.4vw] w-[3rem]'>
								<a target='_blank' href={item.link}>
									{item.svg}
								</a>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
