import React from 'react'
import { Project } from '../../../../public/Portfolio/Components'

export default function Projects(props) {
	return (
		<div className='flex flex-col pc:flex-row justify-between pc:gap-[3rem] gap-[1rem]'>
			{props.projects.map((item, index) => (
				<Project contentRef={props.contentRef} {...item} key={index} />
			))}
		</div>
	)
}
