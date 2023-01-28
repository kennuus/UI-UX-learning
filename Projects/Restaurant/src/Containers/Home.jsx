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

			<div
				className='px-[20vw] py-[6rem] md:py-[10vh] absolute w-[100%] items-center flex flex-col justify-center text-center
			text-white'
			>
				<h1>Brooklyn`s Restaurant</h1>
				<p className='mt-12'>
					We`re always here to feed you <br />{' '}
					<span className='text-[24px] font-bold whitespace-nowrap'>
						Flatbush Avenue
					</span>
				</p>
			</div>
			<button
				onClick={props.toMain}
				className='
				flex items-center justify-center mx-auto mt-16 absolute bottom-[8vh]
				bg-white p-[2vh] md:p-[2vw] rounded-full'
			>
				<ChevronDownIcon className='h-6 w-6' />
			</button>
		</>
	)
}

export default Home
