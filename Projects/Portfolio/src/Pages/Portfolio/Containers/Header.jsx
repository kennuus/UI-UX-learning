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
		<header className={`${props.isProjectOpened ? ' hidden ' : ' fixed '} `}>
			<menu>
				<nav>
					{itemsList.map((item) => (
						<HeaderIcon title={item.title} to={item.to} key={item.id} />
					))}
					<div className="flex pc:hidden">
						<ThemeSwitcher />
					</div>
				</nav>
			</menu>
		</header>
	)
}

export default Header
