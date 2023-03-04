import React from 'react'
import { arrowRightSVG } from '../../../../public/Portfolio/Svgs'
import { Link } from 'react-router-dom'
import SmallButton from './SmallButton'

export default function BigProject(props) {
	return (
		<div
			className='flex h-[100vh] justify-between items-center 
    pc:px-[15vw] pc:py-[15vh]'
		>
			<div className='flex flex-col h-[100%] items-start'>
				<h3 className='text-[2rem] pc:text-[3vw] mb-[2rem] pc:mb-[5.5vh]'>
					{props.project.title}
				</h3>
				<p>s</p>
			</div>
			<Link to={props.project.path} onClick={() => reload()}>
				<SmallButton>{arrowRightSVG}</SmallButton>
			</Link>
		</div>
	)
}
