import React from 'react'

export default function SmallButton(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : null}
			className={`w-[36px] flex justify-center items-center pc:w-[3vw] p-0 pc:hover:scale-125 pc:active:scale-110 transition-all  
			${props.className ? props.className : undefined}}`}
			role={props.role ? props.role : undefined}
		>
			{props.children}
		</button>
	)
}
