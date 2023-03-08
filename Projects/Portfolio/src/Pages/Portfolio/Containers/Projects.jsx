import React from 'react'
import BigProject from '../Components/BigProject'

export default function Projects(props) {
	return (
		<div className='flex flex-col w-screen justify-between'>
			{props.projects.map((project, i) => (
				<BigProject project={project} key={i} />
			))}
		</div>
	)
}
