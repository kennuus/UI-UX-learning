import React from 'react'
import { useState } from 'react'
import Dot from '../../Components/Gallery/Dot'
import Image from '../../Components/Gallery/Image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Line from '../../Components/Line'

export default function Gallery(props) {
	const [currentImage, setImage] = useState(0)
	const imgsList = ['./main/shop.jpg', './main/steak.webp']

	return (
		<div ref={props.refPhotos}>
			<h2>Gallery</h2>

			<Line />

			<div className='mt-1'>
				<Image image={imgsList[currentImage]} />

				<nav className='flex my-8 w-[100%] h-full justify-center items-center'>
					<button
						className='w-[3rem] pc:w-[3vw]'
						onClick={() => setImage(currentImage - 1)}
					>
						<ChevronLeftIcon />
					</button>

					{imgsList.map(() => (
						<Dot />
					))}

					<button
						className='w-[3rem] pc:w-[3vw]'
						onClick={() => setImage(currentImage + 1)}
					>
						<ChevronRightIcon />
					</button>
				</nav>
			</div>
		</div>
	)
}
