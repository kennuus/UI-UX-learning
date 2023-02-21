import React from 'react'

function Home(props) {
	return (
		<>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='w-[100vw] h-[120vh] blur-md dark:brightness-50'
				alt='Brooklyn`s restaurant'
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
			<button onClick={props.toMain} className='absolute top-[80vh] pc:w-[3vw]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</>
	)
}

export default Home
