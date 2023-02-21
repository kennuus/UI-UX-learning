import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import HeaderIcon from '../../Components/HeaderIcon'

function Header(props) {
	const itemsList = [
		{
			title: 'About me',
			to: props.ScrollToAboutMe,
		},
		{
			title: 'Projects',
			to: props.ScrollToProjects,
		},
	]
	return (
		<header className='pc:h-[10vh] pc:top-[-8vh] pc:w-[50vw]'>
			<nav>
				<ul className='flex justify-center gap-[1rem] pc:gap-[3vw]'>
					{itemsList.map((item, index) => (
						<HeaderIcon {...item} key={index} />
					))}
					<li className='flex pc:hidden ml-[3rem] '>
						<ThemeSwitcher />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
