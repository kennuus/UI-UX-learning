import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Home(props) {
	return (
		<>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='w-[100%] h-[120vh] blur-md'
			/>

			<div
				className='px-[24vw] absolute top-[24%] w-[100%]
			items-center flex flex-col justify-center 
			text-white text-center'
			>
				<h1>
					Brooklyn`s Restaurant
				</h1>
				<p className='pt-8'>
					We`re always here to feed you <br />{' '}
					<span className='text-[24px] font-bold'>Flatbush Avenue</span>
				</p>

				<button
					onClick={props.toMain}
					className='flex items-center justify-center mx-auto mt-16 bg-white p-[2vh] md:p-[2vw] rounded-full'
				>
					<ChevronDownIcon className='h-6 w-6 text-black' />
				</button>
			</div>
		</>
	)
}

export default Home
