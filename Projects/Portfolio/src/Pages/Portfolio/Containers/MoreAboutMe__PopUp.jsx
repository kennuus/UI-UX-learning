import React from 'react'
import { githubSVG, closeSVG } from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

export default function MoreAboutMe__PopUp(props) {
	return (
		<>
			{props.isShowProjects && (
				<div className='absolute top-20 flex w-[80vw] min-w-[200px] flex-col gap-[2vh] rounded-md bg-[rgb(245,245,245)] p-[1rem] dark:bg-black-2 pc:w-[30vw] pc:px-[1vw] pc:py-[2vh]'>
					{/* title */}
					<div className='mb-[1rem] flex justify-between pc:mb-[0.5vw] pc:pl-[0.5vw]'>
						<h4 className='text-[1.6rem] font-bold pc:text-[2vw]'>Projects</h4>
						<SmallButton
							onClick={() => props.setIsShowProjects(!props.isShowProjects)}
						>
							{closeSVG}
						</SmallButton>
					</div>

					{/* projects */}
					{props.reactProjectsList.map((item, i) => (
						<div
							className='flex items-center 
                justify-between'
						>
							<button
								key={i}
								onClick={() =>
									item.ref.scrollIntoView({
										behavior: 'smooth',
									})
								}
								className=' rounded-md
                px-[0.3rem] py-[0.1rem]
                transition-colors dark:text-white pc:px-[0.5vw] pc:py-[0.5vh] 
                pc:hover:bg-white-1 pc:active:bg-white-2
                pc:dark:hover:bg-[rgb(65,65,65)] pc:dark:active:bg-[rgb(80,80,80)]
                '
							>
								<span className='whitespace-nowrap text-[1.1rem]   text-gray-text pc:text-[1.3vw]'>
									{item.title}
								</span>
							</button>
							{/* github */}
							{item.isGH && (
								<SmallButton>
									<a
										className='w-[24px] min-w-[24px] '
										target={'_blank'}
										href={item.url}
									>
										{githubSVG}
									</a>
								</SmallButton>
							)}
						</div>
					))}
				</div>
			)}
		</>
	)
}
