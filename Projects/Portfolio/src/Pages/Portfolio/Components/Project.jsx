import React from 'react'
import ProjectTag from './ProjectTag'
import { Link } from 'react-router-dom'

export default function Project(props) {
	return (
		<Link to='/Restaurant' onClick={() => reload()} className='no-underline'>
			<button
				ref={props.contentRef}
				className='relative flex flex-col items-center w-[80vw] pc:w-[20vw] rounded-b-none'
			>
				<div className='flex items-center pc:gap-[3vw] gap-[2rem] px-[0.6rem] pc:px-[1vw] pc:py-[1vh] py-[0.5rem]'>
					<h3>{props.title}  </h3>
					<ProjectTag upwork={props.upwork} />
				</div>
				<img
					src={props.image}
					className='absolute top-[100%] h-[30vh] sm:h-[50vh] pc:h-[30vh] w-[100%] rounded-b-md object-cover'
					alt={props.imgAlt}
				/>
			</button>
		</Link>
	)
}
