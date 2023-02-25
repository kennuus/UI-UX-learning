import React from 'react'
import {
	githubSVG,
	telegramSVG,
	upworkSVG,
} from '../../../../public/Portfolio/Svgs'

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
		,
		{
			svg: upworkSVG,
			link: 'https://www.upwork.com/freelancers/~01b7322956d1e3f011',
		},
	]
	return (
		<footer className='h-[10vh] left-[50vw] right-[50vw] '>
			<nav className='flex h-[100%] justify-center items-center'>
				<ul className='flex pc:gap-[2vw] gap-[1rem]'>
					{linksList.map((item, i) => (
						<li className='flex items-center' key={i}>
							<button className='pc:w-[2.4vw] w-[3rem]'>
								<a target='_blank' href={item.link}>
									{item.svg}
								</a>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}
