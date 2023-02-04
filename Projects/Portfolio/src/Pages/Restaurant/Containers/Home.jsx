import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Home(props) {
	return (
		<>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='w-[100vw] h-[120vh] blur-md dark:brightness-50'
			/>

			<div className='px-[3rem] absolute pc:top-[10vh] top-[100px] items-center '>
				<h1>Brooklyn`s Restaurant</h1>

				<p className='mt-12 text-center'>
					We`re always here to feed you <br />{' '}
					<span className='text-[24px] font-bold whitespace-nowrap'>
						Flatbush Avenue
					</span>
				</p>
			</div>
			<button onClick={props.toMain} className='absolute bottom-[10vh]'>
				<ChevronDownIcon />
			</button>
		</>
	)
}

export default Home
