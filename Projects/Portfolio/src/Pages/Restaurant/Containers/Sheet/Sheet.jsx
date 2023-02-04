import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='
			absolute top-[110vh] 
			flex flex-col gap-[4rem] 
			py-[2rem] px-[2rem] pc:px-[3vw] pc:w-[60vw] pc:rounded-3xl'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
