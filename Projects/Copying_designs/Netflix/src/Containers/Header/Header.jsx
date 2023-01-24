import React from 'react'
import Link from '../../Components/Header/Link'
import Avatar from '../../Components/Header/Avatar'
import UsersPopUp from './UsersPopUp'
import { useState } from 'react'
import { searchSVG, notificationsSVG } from './Imports'

let titles = [
	{
		title: 'Главная',
		link: 'https://www.netflix.com/browse',
	},
	{
		title: 'Сериалы',
		link: 'https://www.netflix.com/browse/genre/83',
	},
	{
		title: 'Фильмы',
		link: 'https://www.netflix.com/browse/genre/34399',
	},
	{
		title: 'Новинки и популярное',
		link: 'https://www.netflix.com/latest',
	},
	{
		title: 'Мой список',
		link: 'https://www.netflix.com/browse/my-list',
	},
	{
		title: 'Поиск по языку',
		link: 'https://www.netflix.com/browse/original-audio',
	},
]

let users = [
	{
		name: 'Марк',
		avatar: 'Header/Avatar2.png',
	},
	{
		name: 'Егор',
		avatar: 'Header/Avatar1.png',
	},
	{
		name: 'Сабина',
		avatar: 'Header/Avatar3.png',
	},
]

export default function Header() {
	const [ShowList, setShowList] = useState(false)
	const [ShowUsers, setShowUsers] = useState(false)

	const usersTimeOut = () => {
		setTimeout(setShowUsers(false), 3000)
 }

	return (
		<header
			className='fixed top-0 left-0 right-0
      h-[41px] md:h-[68px] z-[1000] text-[14px] bg-opacity-0 hover:bg-opacity-100 hover:duration-150 bg-black px-[4%] flex items-center'
		>
			<img
				src='Header/Logo.png'
				className='w-24 object-contain cursor-pointer'
				alt='Logo'
			/>

			<ul className='flex w-[475px]'>
				{/* 840px+ */}
				{titles.map((item) => (
					<li className='hidden md:flex ml-[18px] text-[10px]'>
						<Link title={item.title} url={item.link} />
					</li>
				))}

				{/* 840px- */}
				<li
					className='md:hidden flex flex-col items-center text-white ml-[18px] '
					onMouseEnter={() => {
						setShowList(true)
					}}
					onMouseLeave={() => {
						setTimeout(setShowList(false), 2000)
					}}
				>
					<a>Просмотреть</a>
					{ShowList ? (
						<div
							className='absolute top-[64px]'
							onMouseEnter={() => {
								setShowList(true)
							}}
						>
							<div className='absolute top-[-2px] left-[50%] rounded-t-[7px] border-transparent' />
							<div
								/* topline */ className='absolute top-[-2px] bg-[rgb(229,229,229)] w-[100%] h-[2px]'
							/>
							<ul className='bg-black'>
								{titles.map((item) => (
									<li className='w-[260px] h-[50px] flex  hover:opacity-100 opacity-50 cursor-pointer'>
										<Link title={item.title} url={item.link} />
									</li>
								))}
							</ul>
						</div>
					) : (
						''
					)}
				</li>
			</ul>

			<div
				/* icons */ className='flex justify-center items-center absolute right-[4%] h-[100%]'
			>
				<button className='cursor-pointer py-[1px] px-[6px] mr-[10px]'>
					{searchSVG}
				</button>

				<button className='cursor-pointer py-[1px] px-[6px] mr-[10px]'>
					{notificationsSVG}
				</button>

				<div
					className='h-max w-max'
					onMouseEnter={() => {
						setShowUsers(true)
					}}
					onMouseLeave={() => {
						usersTimeOut()
					}}
				>
					<Avatar img='Header/Avatar2.png' />
					{ShowUsers ? <UsersPopUp users={users} /> : ''}
				</div>
			</div>
		</header>
	)
}
