import React from 'react'

export default function MoreAboutMe() {
	const list = [
		{
			title: 'Why me?',
			li: 'I set goals for myself and always achieve them.',
		},
		{
			title: 'My experience',
			li: '...',
		},
	]
	return (
		<>
			{list.map((item) => (
				<ul>
					<h3 className='text-[2rem] pc:text-[1.8vw] text-center'>
						{item.title}
					</h3>
					<li className='text-center'>{item.li}</li>
				</ul>
			))}
		</>
	)
}
