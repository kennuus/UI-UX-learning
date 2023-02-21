import React from 'react'

export default function SideBarBtn(props) {
	return (
		<button
			onClick={() => {
				props.setIsSideBarShow(false)
				props.item.ref.current.scrollIntoView({ behavior: 'smooth' })
			}}
			className={`${
				props.altBtn
					? ' h-[10%] w-[60%] ml-[15%] font-normal '
					: ' h-[15%] w-[80%] mt-4 font-bold '
			} 
			dark:bg-lighter-black dark:hover:bg-lighter-black+1 dark:active:bg-lighter-black+2
			bg-bar-border-white hover:bg-bar-border-white-1 active:bg-bar-border-white-2 
			rounded-xl flex items-center px-4 pc:px-[2vw] gap-4 pc:gap-[1vw]`}
		>
			{props.altBtn ? '' : props.item.svg}
			{props.item.header}
		</button>
	)
}
