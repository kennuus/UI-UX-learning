import React from 'react'
import { playSVG, moreInfoSVG, replaySVG } from './Imports'

function Trailer({ bgImg, titleImg, description, age }) {
	return (
		<>
			<img src={bgImg} />
			<div
				/* description */ className='absolute left-[4%] bottom-[35%] top-0 flex flex-col w-[36%] justify-end'
			>
				<img src={titleImg} className='w-[100%]' />

				<h3 className='text-white text-[1.2vw]'>{description}</h3>

				<div /* btns  */ className='mt-[1.5vw] font-medium flex '>
					<button className='pl-[2rem] pr-[2.40rem] bg-white rounded-[4px] mr-[1rem] mb-[1rem] py-[0.8rem] h-[40px] flex items-center gap-[10px]'>
						{playSVG}
						Смотреть
					</button>

					<button className='pl-[2rem] pr-[2.40rem] py-[0.8rem] bg-black rounded-[4px] text-white mr-[1rem] mb-[1rem] items-center h-[40px] flex gap-[10px]'>
						{moreInfoSVG}
						Подробнее
					</button>
				</div>
			</div>

			<div /* replay-age */ className=' absolute bottom-[35%] right-0'>
				<button className='mr-[1.1vw] p-[0.3rem] bg-transparent hover:bg-[rgbe(250,250,250,.20)] rounded-full border border-white'>
					{replaySVG}
				</button>

				<span
					className='border-l-[3px] border-l-[rgb(220, 220, 220)] 
					h-[2.4vw] py-[0.5vw] pl-[0.8vw] pr-[3.5vw]
					bg-[rgba(51,51,51,.6)] text-white '
				>
					{age}
				</span>
			</div>
		</>
	)
}

export default Trailer
