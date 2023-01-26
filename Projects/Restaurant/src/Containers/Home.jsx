import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Home(props) {
	return (
		<>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='w-[100%] blur-md object-contain'
			/>

			<div className='w-max h-max absolute top-[6%] text-white text-center'>
				<h1 className='text-heading'>Brooklyn`s Restaurant</h1>

				<h3 className='pt-8'>
					We`re always here to feed you <br />{' '}
					<span className='text-[24px] font-bold'>Flatbush Avenue</span>
				</h3>
				<button
					onClick={props.toMain}
					className='mx-auto bg-white h-16 w-16 rounded-full flex items-center justify-center mt-32 hover:scale-125 active:scale-100 transition hover:duration-200'
				>
					<ChevronDownIcon className='h-6 w-6 text-black' />
				</button>
			</div>
		</>
	)
}

export default Home
