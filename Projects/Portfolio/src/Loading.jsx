import React from 'react'

export default function Loading() {
	return (
		<div
			className='flex justify-center items-center 
    h-screen bg-white text-black dark:bg-black dark:text-white'
		>
			<div className='items-center justify-between flex flex-col mb-[10vh] gap-[3vh]'>
				<h1 className='text-[3rem] pc:text-[6vw]'>Loading</h1>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.4rem'
					height='2.4rem'
					viewBox='0 0 24 24'
				>
					<path
						fill='none'
						stroke='currentColor'
						strokeDasharray='15'
						strokeDashoffset='15'
						strokeLinecap='round'
						strokeWidth='3'
						d='M12 3C16.9706 3 21 7.02944 21 12'
					>
						<animate
							fill='freeze'
							attributeName='stroke-dashoffset'
							dur='0.3s'
							values='15;0'
						/>
						<animateTransform
							attributeName='transform'
							dur='0.9s'
							repeatCount='indefinite'
							type='rotate'
							values='0 12 12;360 12 12'
						/>
					</path>
				</svg>
			</div>
		</div>
	)
}
