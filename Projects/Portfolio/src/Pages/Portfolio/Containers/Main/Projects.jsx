import React from 'react'
import Project from '../../Components/Project.jsx'

export default function Projects(props) {
	const projects = [
		{
			title: 'Restaurant',
			upwork: false,
			image: 'restaurant_preview.png',
			path: '/Restaurant',
			id: 0,
		},
	]
	return (
		<div
			ref={props.refProjects}
			className='
			flex flex-col items-center 
			pc:gap-[0.5rem] gap-[1rem] 
			pc:h-[60vh] min-h-[80vh]'
		>
			<h2>Projects</h2>
			<div className='flex flex-col pc:flex-row justify-between pc:gap-[3rem] gap-[1rem]'>
				{projects.map((item) => (
					<Project
						title={item.title}
						image={item.image}
						upwork={item.upwork}
						isProjectOpened={props.isProjectOpened}
						setIsProjectOpened={props.setIsProjectOpened}
						path={item.path}
						key={item.id}
					/>
				))}
			</div>
		</div>
	)
}
