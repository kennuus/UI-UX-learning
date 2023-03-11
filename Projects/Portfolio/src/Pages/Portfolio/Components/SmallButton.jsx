import React from 'react'

export default function SmallButton(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : null}
			className={`flex h-[36px] w-[36px] items-center justify-center p-0 transition-all pc:w-[3vw] pc:hover:scale-125 pc:active:scale-110  
			${props.className ? props.className : undefined}}`}
			role={props.role ? props.role : undefined}
		>
			{props.children}
		</button>
	)
}
