import React from 'react'

function SideBarIcon(props) {
	return (
		<li>
			<button className='pc:w-6 pc:h-6 h-8 w-8' onClick={props.to}>
				{props.svg}
			</button>
		</li>
	)
}

export default SideBarIcon
