import React from 'react'
import { useState } from 'react'
import Dot from '../../Components/Gallery/Dot'
import Line from '../../Components/Line'

export default function Gallery(props) {
	const imgsList = ['./main/shop.jpg', './main/steak.webp', './main/coffee.jpg']
	const [currentImage, setImage] = useState(0)
	const changePhoto = (num) => {
		{
			if (currentImage + num === -1) {
				setImage(imgsList.length - 1)
			} else if (currentImage + num === imgsList.length) {
				setImage(0)
			} else setImage(currentImage + num)
		}
	}

	return (
		<div ref={props.refPhotos}>
			<h2>Gallery</h2>
			<Line showAlways={true} />

			<div className='flex flex-col gap-[0.5rem] pc:gap-[1.5vh]'>
				<div className='w-[100%] h-[70vh] pc:h-[50vh] bg-gray-300 rounded-md'>
					<img
						src={imgsList[currentImage]}
						className='rounded-md w-[100%] h-[100%] text-black text-[1.5rem] text-center object-cover'
						alt='Image is no more avilable'
					/>
				</div>

				<nav className='flex justify-between items-center pc:w-[30%] w-max mx-auto'>
					<button onClick={() => changePhoto(-1)} className='pc:w-[3vw]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					{imgsList.map((item, index) => (
						<Dot
							index={index}
							setImg={setImage}
							isActive={currentImage === index ? true : false}
							key={index}
						/>
					))}

					<button onClick={() => changePhoto(+1)} className='pc:w-[3vw]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</nav>
			</div>
		</div>
	)
}
