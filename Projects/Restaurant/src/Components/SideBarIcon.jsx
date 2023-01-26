import React from 'react'

function SideBarIcon(props) {
	return (
		<li>
			<button
				className='cursor-pointer hover:scale-125 active:scale-100 transition hover:duration-100'
				onClick={props.to}
			>
				{props.svg}
			</button>
		</li>
	)
}

export default SideBarIcon
