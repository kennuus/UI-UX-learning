import React from 'react'

function SideBarIcon(props) {
	return (
		<button onClick={props.to} className='pc:w-[3vw] w-[2.6rem]'>
			{props.svg}
		</button>
	)
}

export default SideBarIcon
