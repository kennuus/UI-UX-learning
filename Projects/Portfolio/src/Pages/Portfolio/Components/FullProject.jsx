import { React } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import ProjectTag from './ProjectTag'

export default function FullProject(props) {
	return (
		<div
			className='fixed top-5 right-5 left-5 bottom-5 
			flex flex-col
			 bg-white dark:bg-bar-black dark:border-bar-border-black border-bar-border-white border-[3px]
			 px-8 py-16 rounded-md z-[1000] '
		>
			<button
				onClick={() => {
					props.state(false)
				}}
				className='w-max h-max dark:bg-bar-black bg-white absolute top-8 left-8'
			>
				<ChevronLeftIcon className='w-8' />
			</button>
			<div className='block sm:hidden absolute top-8 right-8'>
				<ProjectTag upwork={props.upwork} />
			</div>
			<div className='flex flex-col md:flex-row mt-8'>
				<img
					className='rounded-md md:w-[30%] md:h-[70vh] w-[100%] h-[40vh] object-cover'
					src={props.image}
				/>
				<div className='flex flex-col md:ml-8'>
					<div className='flex items-center gap-[10%]'>
						<h2>{props.title}</h2>
						<div className='hidden sm:block'>
							<ProjectTag upwork={props.upwork} />
						</div>
					</div>
					<button className='md:h-max md:w-max whitespace-nowrap absolute bottom-8 left-[50%] translate-x-[-50%]'>
						<Link to={props.path}>To project</Link>
					</button>
				</div>
			</div>
		</div>
	)
}
