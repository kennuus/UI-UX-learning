import React from 'react'
import HeaderUser from '../../Components/Header/HeaderUser'
import {
	manageProfilesSVG,
	moveProfileSVG,
	accountSVG,
	supportSVG,
} from './Imports'
import ListItem from '../../Components/Header/ListItem'

const ItemsList = [
	{
		Title: 'Управление профилями',
		SVG: { manageProfilesSVG },
	},
	{
		Title: 'Перенос профиля',
		SVG: { moveProfileSVG },
	},
	{
		Title: 'Аккаунт',
		SVG: { accountSVG },
	},
	{
		Title: 'Центр поддержки',
		SVG: { supportSVG },
	},
]

function UsersPopUp({ users, show }) {
	return (
		<div className='w-[220px] h-max absolute top-20 right-0 bg-black'>
			<ul className='pt-[10px] pb-[5px] flex flex-col'>
				{users.map((user) => (
					<HeaderUser img={user.avatar} name={user.name} />
				))}
			</ul>

			<span
				className='w-[100%] h-[0px] 
			border-[hsla(0,0%,100%,.25)] border-t'
			/>

			<ul className='pb-[10px]'>
				{ItemsList.map((item) => {
					;<ListItem img={item.SVG} title={item.Title} />
				})}
			</ul>
		</div>
	)
}

export default UsersPopUp
