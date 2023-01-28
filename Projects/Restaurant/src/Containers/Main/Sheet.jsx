import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='absolute top-[110vh] flex justify-center flex-col gap-[42px]
			py-[1.6rem] px-[3vw] pc:w-[60vw] min-w-[300px]
			bg-white pc:rounded-lg'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
