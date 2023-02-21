import React from 'react'
import { Navigation, Contacts } from '../../../../public/Portfolio/Containers'

export default function SideBar(props) {
	return (
		<div
			className={`${
				props.isSideBarShow
					? ' top-0 w-screen h-max transition-all ease-out duration-300'
					: ' top-[-100%] transition-all ease-in duration-500'
			} 
			  dark:bg-bar-black bg-white  pc:dark:border-bar-border-black
				fixed left-0 right-0 flex flex-col
				pc:fixed pc:left-0 pc:top-0 pc:bottom-0 pc:w-[25vw] pc:border-r-2 `}
		>
			<Navigation
				isSideBarShow={props.isSideBarShow}
				setIsSideBarShow={props.setIsSideBarShow}
				refsList={props.refsList}
				projects={props.projects}
			/>
			<Contacts />
		</div>
	)
}
