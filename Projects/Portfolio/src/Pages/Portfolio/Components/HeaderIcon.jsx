import React from 'react'

function HeaderIcon(props) {
	return (
		<li className='flex'>
			<button onClick={props.to}>
				{props.title}
			</button>
		</li>
	)
}

export default HeaderIcon
