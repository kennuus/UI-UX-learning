import React from 'react'
import { githubSVG, closeSVG } from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

export default function MoreAboutMe__PopUp(props) {
	return (
		<>
			{props.isShowProjects && (
				<div
					className='absolute flex gap-[2vh] flex-col top-16 w-[80vw] pc:w-[30vw] rounded-md min-w-[200px]
          pc:px-[1vw] pc:py-[2vh]
          px-[1rem] py-[0.5rem]
          bg-[rgb(245,245,245)] dark:bg-black-2'
				>
					<div className='flex justify-between pc:px-[0.5vw] px-[0.3rem]'>
						<h4 className='text-[1.6rem] pc:text-[2vw] font-bold'>Projects</h4>
						<SmallButton
							onClick={() => props.setIsShowProjects(!props.isShowProjects)}
							className=' justify-end '
						>
							{closeSVG}
						</SmallButton>
					</div>
					<div className='w-[100%] h-[2px] rounded-full bg-white-2' />

					{props.reactProjectsList.map((item, i) => (
						<button
							key={i}
							onClick={() =>
								item.ref.scrollIntoView({
									behavior: 'smooth',
								})
							}
							className='rounded-md dark:text-white 
                pc:hover:bg-white-1 pc:active:bg-white-2
                pc:dark:hover:bg-[rgb(65,65,65)] pc:dark:active:bg-[rgb(80,80,80)]
                transition-colors flex justify-between 
                pc:px-[0.5vw] pc:py-[0.5vh]
                px-[0.3rem] py-[0.1rem]
                '
						>
							<span className='text-gray-text font-bold whitespace-nowrap'>
								{item.title}
							</span>

							{/* github */}
							{item.isGH && (
								<a
									className='min-w-[24px] w-[24px] '
									target={'_blank'}
									href={item.url}
								>
									{githubSVG}
								</a>
							)}
						</button>
					))}
				</div>
			)}
		</>
	)
}
