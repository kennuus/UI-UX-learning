import React from 'react'

export default function LineProjects(props) {
	return (
		<div className='ml-6 flex items-center gap-4'>
			<button
				onMouseEnter={() => props.handleTechHover(props.index)}
				onMouseLeave={() => props.handleTechHover(props.index)}
				onClick={() => props.setIsShowProjects(!props.isShowProjects)}
				className='h-[24px] min-w-[200px]'
			>
				<div className='h-[5px] w-[80vw] rounded-full bg-white-1 dark:bg-black-2 pc:w-[30vw]'>
					{/* inline line */}
					<div
						className={`${
							props.techsState[props.index] && ' scale-y-150 '
						} flex h-[100%] w-[100%] min-w-[200px] justify-end rounded-full bg-black-2 transition-transform`}
					/>
				</div>
			</button>
			<span
				onClick={() => props.setIsShowProjects(!props.isShowProjects)}
				className='text-[1.6rem] text-white-3 pc:text-[1.4vw] pc:hover:cursor-pointer'
			>
				{props.reactProjectsList.length}
			</span>
		</div>
	)
}
