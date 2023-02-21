import React from 'react'
import SideBarBtn from '../../Components/SideBarBtn'

export default function Navigation(props) {
	return (
		<div className='h-[90vh] flex flex-col justify-start items-center py-[10vh] pc:gap-[3vh] gap-3'>
			{props.refsList.map((item, index) => (
				<>
					<SideBarBtn
						key={index}
						item={item}
						isSideBarShow={props.isSideBarShow}
						setIsSideBarShow={props.setIsSideBarShow}
						altBtn={false}
					/>
					<SideBarBtn
						key={index + 1 }
						item={item}
						isSideBarShow={props.isSideBarShow}
						setIsSideBarShow={props.setIsSideBarShow}
						altBtn={true}
					/>
				</>
			))}
		</div>
	)
}
