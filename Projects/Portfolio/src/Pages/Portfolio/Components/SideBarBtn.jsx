import React from 'react'

export default function SideBarBtn(props) {
	return (
		<button
			onClick={() => {
				props.mainBtn
					? (props.item.ref.current.scrollIntoView({ behavior: 'smooth' }),
					  props.setIsSideBarShow(false))
					: (props.item.contentRef.current.scrollIntoView({
							behavior: 'smooth',
					  }),
					  props.setIsSideBarShow(false))
			}}
			className={`${
				props.mainBtn
					? ' h-[15%] w-[80%] font-bold '
					: ' h-[10%] w-[60%] ml-[20%] font-normal '
			} ${
				props.mainBtn === true && props.itemNum >= 1 ? ' mt-9 pc:mt-[5vh] ' : ''
			} 
			dark:bg-black-2 dark:hover:bg-black-2+1 dark:active:bg-black-2+2
			bg-white-1 hover:bg-white-1-1 active:bg-white-1-2 
			rounded-xl flex items-center px-4 pc:px-[2vw] gap-4 pc:gap-[1vw`}
		>
			{props.mainBtn && props.item.svg}
			{props.mainBtn ? props.item.header : props.item.contentHeader}
		</button>
	)
}
