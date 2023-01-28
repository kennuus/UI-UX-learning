import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='
			absolute top-[110vh] flex justify-center flex-col gap-[42px]
			py-[1.6rem] px-[2rem] md:px-[5vw] pc:w-[60vw] pc:rounded-lg h-max
			bg-white dark:bg-gray-900 dark:text-white'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
