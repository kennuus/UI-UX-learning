import React from 'react'

export default function BigButton(props) {
	return (
		<button
			onClick={props.onClick ? props.onClick : null}
			ref={props.ref ? props.onClick : null}
			className={`
			dark:bg-black-1 pc:dark:active:bg-black-1 pc:dark:hover:bg-black-2 
			bg-white-1 pc:hover:bg-white-2 pc:active:bg-white-1  
			text-gray-white
			rounded-md font-bold text-[1.6rem] pc:text-[1.6vw] transition-colors whitespace-nowrap  
      ${props.className ? props.className : undefined}}`}
			role={props.role ? props.role : undefined}
		>
			{props.children}
		</button>
	)
}
