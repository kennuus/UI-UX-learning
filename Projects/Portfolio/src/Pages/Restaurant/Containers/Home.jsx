import React from 'react'

function Home(props) {
	return (
		<div className='h-[120vh] px-[3rem] pc:py-[10vh] py-[100px]'>
			<img
				ref={props.refHome}
				src='bg1.jpg'
				className='w-screen object-cover h-[120vh] blur-md dark:brightness-50 absolute top-0 left-0 right-0'
			/>

			<div>
				<h1>Brooklyn`s Restaurant</h1>

				<p className='mt-12 text-center'>
					We`re always here to feed you <br />
					<span className='text-[24px] font-bold whitespace-nowrap'>
						Flatbush Avenue
					</span>
				</p>
				<button onClick={props.toMain} className='pc:w-[3vw] w-[3rem]'>
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
			</div>
		</div>
	)
}

export default Home
