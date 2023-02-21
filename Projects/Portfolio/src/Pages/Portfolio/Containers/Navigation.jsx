import React from 'react'
import { SideBarBtn } from '../../../../public/Portfolio/Components'

export default function Navigation(props) {
	return (
		<div className='pc:h-[90vh] h-max flex flex-col justify-start items-center py-[10vh] pc:gap-[3vh] gap-3'>
			{props.refsList.map((item, index) => (
				<>
					<SideBarBtn
						key={index}
						mainBtn={true}
						itemNum={index}
						item={item}
						isSideBarShow={props.isSideBarShow}
						setIsSideBarShow={props.setIsSideBarShow}
					/>
					<SideBarBtn
						key={item}
						mainBtn={false}
						itemNum={index}
						item={item}
						isSideBarShow={props.isSideBarShow}
						setIsSideBarShow={props.setIsSideBarShow}
					/>
				</>
			))}
		</div>
	)
}
