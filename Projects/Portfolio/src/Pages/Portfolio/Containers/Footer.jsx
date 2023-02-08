import React from 'react'

function Footer() {
	const itemsList = [
		{
			title: 'GitHub',
			link: 'https://github.com/kennuuss',
			id: 0,
		},
	]
	return (
		<footer className='absolute bottom-0 left-0 right-0 pc:left-[50%] pc:translate-x-[-50%] flex rounded-t-md border-b-0 shadow-t-xl items-center'>
			<nav className='w-[100%] flex justify-center'>
				<ul>
					{itemsList.map((item) => (
						<li key={item.id}>
							<button>
								<a target='_blank' href={item.link}>
									{item.title}
								</a>
							</button>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
