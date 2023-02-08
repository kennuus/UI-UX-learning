import React from 'react'

function HeaderIcon(props) {
	return (
		<li className='flex whitespace-nowrap'>
			<button onClick={props.to}>
				{props.title}
			</button>
		</li>
	)
}

export default HeaderIcon
