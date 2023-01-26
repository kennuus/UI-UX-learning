import React from 'react'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='absolute top-[110vh] flex justify-center flex-col gap-[96px]
			py-[3rem] px-[3vw] w-[60vw] min-w-[300px]
			bg-white rounded-lg'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
		</main>
	)
}
