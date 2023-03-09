import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='
			mt-[-10vh] flex flex-col pc:w-[70vw] pc:rounded-t-3xl
			p-[2rem] gap-[4rem] 
			pc:px-[5vw] pc:py-[10vh] pc:gap-[15vh]
			dark:bg-dark-brown bg-light-brown z-[10]'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
