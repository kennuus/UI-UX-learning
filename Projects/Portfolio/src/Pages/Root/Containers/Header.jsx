import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import SideBarIcon from '../Components/SideBarIcon'

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
		<header>
			<menu>
				<nav>
					{itemsList.map((item) => (
						<SideBarIcon title={item.title} to={item.to} />
					))}
					<ThemeSwitcher />
				</nav>
			</menu>
		</header>
	)
}

export default Header
