import React from 'react'
import { Link } from 'react-router-dom'
import MdBtn from './MdBtn'
import { H3 } from './Headlines'

export default function BigProject(props) {
	return (
		<div
			ref={(project) => props.projectsRefs.push(project)}
		>
			<H3>{props.project.title}</H3>
			<p className='max-w-[60vw] text-center text-[1.6rem] text-black-2 dark:text-white-3 pc:max-w-[20vw] pc:text-left pc:text-[1.2vw]'>
				{props.project.description}
			</p>
			<Link
				to={props.project.path}
				onClick={() => reload()}
				className='absolute bottom-[30vh]'
			>
				<MdBtn>{props.project.btnText}</MdBtn>
			</Link>
		</div>
	)
}
