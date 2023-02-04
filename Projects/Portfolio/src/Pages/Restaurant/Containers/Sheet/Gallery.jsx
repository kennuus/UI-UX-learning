import React from 'react'
import { useState } from 'react'
import Dot from '../../Components/Gallery/Dot'
import Image from '../../Components/Gallery/Image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Line from '../../Components/Line'

export default function Gallery(props) {
	const [currentImage, setImage] = useState(0)
	const imgsList = ['./main/shop.jpg', './main/steak.webp', './main/coffee.jpg']
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

			<div className='flex flex-col pc:gap-[0.5rem] gap-[1rem]'>
				<Image image={imgsList[currentImage]} />

				<nav className='flex justify-between items-center pc:w-[30%] w-max mx-auto'>
					<button onClick={() => changePhoto(-1)}>
						<ChevronLeftIcon />
					</button>

					{imgsList.map((item, index) => (
						<Dot
							index={index}
							setImg={setImage}
							isActive={currentImage === index ? true : false}
						/>
					))}

					<button onClick={() => changePhoto(+1)}>
						<ChevronRightIcon />
					</button>
				</nav>
			</div>
		</div>
	)
}
