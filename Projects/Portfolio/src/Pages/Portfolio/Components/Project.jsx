import React from 'react'
import ProjectTag from './ProjectTag'
import { Link } from 'react-router-dom'
/* import FullProject from './FullProject.jsx' */

export default function Project(props) {
	return (
		<>
			<button
				/* onClick={() => props.setIsProjectOpened(!props.isProjectOpened)} */
				className='relative flex flex-col items-center w-[80vw] pc:w-[20vw] py-[0.3rem] px-[0.6rem]
				pc:hover:scale-110 pc:active:scale-100 rounded-md'
			>
				<div className='flex items-center gap-[5vw] pc:gap-[1rem]'>
					<h3 className='text-left'>{props.title}</h3>
					<ProjectTag upwork={props.upwork} />
				</div>
				<img
					src={props.image}
					className='absolute top-[100%] h-[30vh] sm:h-[50vh] pc:h-[30vh] w-[100%] rounded-b-md object-cover'
				/>
			</button>
			{/* {props.isProjectOpened ? (
				<FullProject
					title={props.title}
					state={props.setIsProjectOpened}
					image={props.image}
					upwork={props.upwork}
					path={props.path}
				/>
			) : (
				''
			)} */}
		</>
	)
}
