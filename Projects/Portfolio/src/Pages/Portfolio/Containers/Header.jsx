import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import HeaderIcon from '../Components/HeaderIcon'

function Header(props) {
	const itemsList = [
		{
			title: 'About me',
			to: props.ScrollToAboutMe,
			id: 0,
		},
		{
			title: 'Projects',
			to: props.ScrollToProjects,
			id: 1,
		},
	]
	return (
		<header>
			<nav>
				{itemsList.map((item) => (
					<HeaderIcon {...item} key={item.id} />
				))}
				<li className='flex pc:hidden'>
					<ThemeSwitcher />
				</li>
			</nav>
		</header>
	)
}

export default Header
