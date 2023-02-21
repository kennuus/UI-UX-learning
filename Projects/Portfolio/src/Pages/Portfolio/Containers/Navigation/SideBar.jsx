import React from 'react'
import Contacts from './Contacts'
import Navigation from './Navigation'
import Hamburger from './Hamburger'

export default function SideBar(props) {
	return (
		<div
			className={`${
				props.isSideBarShow
					? ' block w-screen h-screen '
					: ' pc:fixed pc:left-0 pc:top-0 pc:bottom-0 pc:w-[20vw] '
			} 
			  dark:bg-bar-black bg-white pc:border-r-2 pc:dark:border-bar-border-black`}
		>
			<Hamburger
				isSideBarShow={props.isSideBarShow}
				setIsSideBarShow={props.setIsSideBarShow}
			/>
			<div className='flex flex-col'>
				<Navigation
					isSideBarShow={props.isSideBarShow}
					setIsSideBarShow={props.setIsSideBarShow}
					refsList={props.refsList}
					projects={props.projects}
				/>
				<Contacts />
			</div>
		</div>
	)
}
