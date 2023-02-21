import React from 'react'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Reviews from './Reviews'

export default function Sheet(props) {
	return (
		<main
			ref={props.refSheet}
			className='
			mt-[-10vh] z-[20] flex flex-col pc:w-[60vw] w-screen pc:rounded-t-3xl
			gap-[1rem] pc:gap-[9vh] 
			px-[1rem] py-[2rem] 
			pc:px-[3vw] pc:py-[6vh]'
		>
			<Gallery refPhotos={props.refPhotos} />
			<Reviews refReviews={props.refReviews} />
			<Contacts refContacts={props.refContacts} />
		</main>
	)
}
