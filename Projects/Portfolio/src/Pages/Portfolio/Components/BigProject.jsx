import React from 'react'
import { Link } from 'react-router-dom'
import MdBtn from './MdBtn'

export default function BigProject(props) {
	return (
		<div className='flex flex-col h-[100vh] items-center pc:items-start pc:px-[15vw] px-[3rem] relative'>
			<h3
				className='text-[2.6rem] pc:text-[3.8vw] 
			mb-[0.8rem] pc:mb-[0.8vh] whitespace-nowrap'
			>
				{props.project.title}
			</h3>
			<p className='pc:max-w-[20vw] max-w-[60vw] text-[1.4rem] pc:text-[1.2vw] pc:text-left text-center text-black-2 dark:text-white-3'>
				{props.project.description}
			</p>
			<Link
				to={props.project.path}
				onClick={() => reload()}
				className='absolute bottom-[30vh]'
			>
				<MdBtn>
					{props.project.btnText}
				</MdBtn>
			</Link>
		</div>
	)
}
