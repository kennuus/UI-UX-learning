import React from 'react'
import FooterIcon from '../Components/FooterIcon'

function Footer() {
	const itemsList = [
		{
			link: 'https://github.com/kennuus',
			svg: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 16 16'
					strokeWidth={1.5}
					stroke='currentColor'
				>
					{' '}
					<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>{' '}
				</svg>
			),
		},
	]
	return (
		<footer
			className='absolute justify-center flex
			bottom-0 left-0 right-0 
			pc:w-[30%] h-32 pc:rounded-t-xl pc:mx-auto
  	bg-black dark:bg-white '
		>
			<nav className='justify-center flex gap-3 absolute top-6'>
				{itemsList.map((item) => {<FooterIcon/>})}

				{/* <a
					aria-label='GitHub link'
					target='_blank'
					className='pc:hover:scale-125 pc:w-[36px] pc:h-[36px] w-[48px] h-[48px]'
					href='https://github.com/kennuus'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 16 16'
						strokeWidth={1.5}
						stroke='currentColor'
						className='pc:w-[36px] pc:h-[36px] w-[48px] h-[48px]'
					>
						{' '}
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>{' '}
					</svg>
				</a>

				<div className='pc:h-[36px] h-[48px] w-[1px] bg-white dark:bg-black' />

				<a
					aria-label='UpWork link'
					target='_blank'
					className='pc:hover:scale-125 '
					href='https://www.upwork.com/freelancers/~01b7322956d1e3f011'
				>
					<svg
						fill='none'
						className='pc:w-[36px] pc:h-[36px] w-[48px] h-[48px]'
						enable-background='new 0 0 2500 2500'
						viewBox='0 0 2500 2500'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z' />
					</svg>
				</a> */}
			</nav>

			<adress>
				<a
					className='bg-white dark:bg-black rounded-sm h-min absolute bottom-8 '
					href='mailto:kennuuss1@gmail.com'
				>
					kennuuss1@gmail.com
				</a>
			</adress>
		</footer>
	)
}

export default Footer
