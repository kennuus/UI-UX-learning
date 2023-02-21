import React from 'react'
import FooterIcon from '../Components/FooterIcon'

function Footer() {
	const itemsList = [
		{
			title: 'GitHub',
			link: 'https://github.com/kennuuss',
			id: 0,
		},
	]
	return (
		<footer className='absolute bottom-0 left-0 right-0 pc:left-[50%] pc:translate-x-[-50%] flex  shadow-t-xl items-center
		border-b-0 border-x-0 pc:border-x-[3px] pc:border-t-[3px] pc:rounded-t-md'>
			<nav className='w-[100%] flex justify-center'>
				<ul>
					{itemsList.map((item) => (
						<FooterIcon {...item} key={item.id} />
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
