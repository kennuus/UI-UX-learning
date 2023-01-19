import React from 'react'
import Link from '../../Components/Link'

const titles = [
	{
		title: 'Home',
		id: 1,
	},
	{
		title: 'TV Shows',
	},
	{
		title: 'Movies',
	},
	{
		title: 'New & Popular',
	},
	{
		title: 'My List',
	},
	{
		title: 'Browse my languages',
	},
]

export default function Header() {
	return (
		<header
			className='fixed top-0 left-0 right-0
      h-[41px] md:h-[68px] text-[14px] bg-opacity-100 hover:bg-opacity-100 hover:duration-150 bg-black px-[48px] flex'
		>
			<img
				src='Logo.png'
				className='w-24 object-contain mr-[48px]'
				alt='Logo'
			/>
			<ul className='flex flex-row items-center'>
				{titles.map((item) => (
					<Link title={item.title} />
				))}
			</ul>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z'
					fill='currentColor'
				></path>
			</svg>
		</header>
	)
}
