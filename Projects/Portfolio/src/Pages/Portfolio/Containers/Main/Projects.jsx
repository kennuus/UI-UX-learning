import React from 'react'
import Project from '../../Components/Project.jsx'

export default function Projects(props) {
	return (
		<div className='flex flex-col pc:flex-row justify-between pc:gap-[3rem] gap-[1rem]'>
			{props.projects.map((item, index) => (
				<Project refProject={props.refProject} {...item} key={index} />
			))}
		</div>
	)
}
