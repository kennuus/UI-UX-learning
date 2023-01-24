import React from 'react'
import Item from '../Components/Header/Item'

const itemsList = [
	{
		content: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='auto'
				height='auto'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='black'
				fill='black'
				className='w-[22px] h-[22px]'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z' />
				<path d='M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2' />
			</svg>
		),
	},
	{
		content: 'Магазин',
	},
	{
		content: 'Mac',
	},
	{
		content: 'iPad',
	},
	{
		content: 'iPhone',
	},
	{
		content: 'Watch',
	},
	{
		content: 'AirPods',
	},
	{
		content: 'TV и Дом',
	},
	{
		content: 'Только в Apple',
	},
	{
		content: 'Аксессуары',
	},
	{
		content: 'Поддержка',
	},
	{
		content: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='w-[22px] h-[22px]'
			>
				<path
					fillRule='evenodd'
					d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
					clipRule='evenodd'
				/>
			</svg>
		),
	},
	{
		content: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='w-[22px] h-[22px]'
			>
				<path
					fillRule='evenodd'
					d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
					clipRule='evenodd'
				/>
			</svg>
		),
	},
]

export default function Header() {
	return (
		<header
			className='fixed top-0 left-0 right-0  
			bg-blur-sm z-[200] px-[22px] h-[44px] flex justify-center lg:mx-auto'
		>
			<ul className='flex justify-between h-[100%] max-w-[980px]'>
				{itemsList.map((item) => (
					<Item Item={item.content} />
				))}
			</ul>
		</header>
	)
}
