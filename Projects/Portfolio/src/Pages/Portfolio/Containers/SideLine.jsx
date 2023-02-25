import React from 'react'
import { SideLineBtn } from '../../../../public/Portfolio/Components'

export default function SideLine(props) {
	return (
		<header
			className='top-[50%] translate-y-[-50%] justify-between fixed flex flex-col items-center
			w-[2px] max-h-[80vh] min-h-[30vh] gap-16 left-[2rem] pc:left-[4vw] bg-gray-white'
		>
			{props.refsList.map((item, i) => (
				<nav className='flex flex-col items-center gap-2' key={i}>
					<li>
						<SideLineBtn
							{...item}
							blockRef={item.ref}
							contentRef={item.contentRef}
							mainBtn={true}
						/>
					</li>
					{item.contentRef && (
						<li>
							<SideLineBtn {...item} blockRef={item.ref} mainBtn={false} />
						</li>
					)}
				</nav>
			))}
		</header>
	)
}
