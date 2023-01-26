import React from 'react'
import { useState } from 'react'
import Dot from '../../Components/Gallery/Dot'
import Image from '../../Components/Gallery/Image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Line from '../../Components/Line'

export default function Gallery(props) {
	const [currentImage, setImage] = useState(0)
	const imgsList = [
		'./main/shop.jpg',
		'./main/hotdog.jpg',
		'./main/meat.jpg',
		'./main/soup.jpg',
	]

	return (
		<div ref={props.refPhotos}>
			<h1 className='text-heading'>Gallery</h1>

			<Line />
			<div className='mt-8'>
				<nav className='flex mb-2 w-[100%] justify-center'>
					{imgsList.map(() => (
						<Dot />
					))}
				</nav>
				<div
					className='flex-row flex items-center justify-center 
					max-w-[80%] mx-auto'
				>
					<button onClick={() => setImage(currentImage - 1)}>
						<ChevronLeftIcon className='text-black w-8 h-8' />
					</button>
					<Image image={imgsList[currentImage]} />
					<button onClick={() => setImage(currentImage + 1)}>
						<ChevronRightIcon className='text-black w-8 h-8' />
					</button>
				</div>
			</div>
		</div>
	)
}
