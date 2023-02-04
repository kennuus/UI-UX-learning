import React from 'react'

export default function Projects(props) {
	return (
		<div
			ref={props.refProjects}
			className='flex flex-col pc:gap-[0.5rem] gap-[1rem] h-[60vh]'
		>
			<h1>Projects</h1>
		</div>
	)
}
