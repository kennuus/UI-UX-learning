import React from 'react'

function SideBarIcon(props) {
	return (
		<li className='flex '>
			<button onClick={props.to}>
				{props.svg}
			</button>
		</li>
	)
}

export default SideBarIcon
