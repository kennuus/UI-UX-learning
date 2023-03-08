import React from 'react'

export default function LineProjects(props) {
	return (
		<div className='flex gap-4 ml-6'>
			<button
				onMouseEnter={() => props.handleTechHover(props.index)}
				onMouseLeave={() => props.handleTechHover(props.index)}
				onClick={() => props.setIsShowProjects(!props.isShowProjects)}
				className='h-[24px] min-w-[200px]'
			>
				<div
					className={`${
						props.techsState[props.index] && ' scale-y-150 '
					} pc:w-[30vw] w-[80vw] h-[4px] transition-transform bg-white-1 rounded-full `}
				>
					{/* inline line */}
					<div className='w-[100%] bg-black-2 min-w-[200px] rounded-full h-[100%] flex justify-end' />
				</div>
			</button>
			<span
				onClick={() => props.setIsShowProjects(!props.isShowProjects)}
				className='text-white-3 pc:hover:cursor-pointer'
			>
				{props.reactProjectsList.length}
			</span>
		</div>
	)
}
