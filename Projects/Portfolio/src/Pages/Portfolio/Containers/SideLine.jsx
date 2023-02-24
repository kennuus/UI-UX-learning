import React from 'react'
import { SideLineBtn } from '../../../../public/Portfolio/Components'

export default function SideLine(props) {
	return (
		<header
			className='top-[50%] translate-y-[-50%] justify-between fixed flex flex-col items-center
			w-[2px] max-h-[80vh] min-h-[30vh] gap-8 left-[2rem] pc:left-[4vw]
			bg-black dark:bg-white'
		>
			{props.refsList.map((item, index) => (
				<nav className='flex flex-col items-center gap-2' key={index}>
					<li>
						<SideLineBtn {...item} mainBtn={true} />
					</li>
					<li>
						<SideLineBtn {...item} mainBtn={false} />
					</li>
				</nav>
			))}
		</header>
	)
}
