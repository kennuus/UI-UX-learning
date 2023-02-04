import React from 'react'

function SideBarIcon(props) {
	return (
		<li className='flex '>
			<button onClick={props.to}>
				{props.title}
			</button>
		</li>
	)
}

export default SideBarIcon
