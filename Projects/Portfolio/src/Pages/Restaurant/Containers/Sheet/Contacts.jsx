import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Line from '../../Components/Line'

export default function Contacts(props) {
	return (
		<div className='flex flex-col justify-center' ref={props.refContacts}>
			<h2>Contacts</h2>

			<Line showAlways={true} />

			<div className='flex flex-col items-center pc:gap-[0.5rem] gap-[1rem]'>
				<input placeholder='Name' type='text' />
				<input placeholder='Your mail' type='text' />
				<textarea rows={3} placeholder='Description' type='text' />

				<button
					className='mt-[0.5rem] rounded-full hover:scale-100 bg-lighter-brown dark:bg-light-brown 
					w-[50%] pc:w-[30%] pc:hover:w-[35%] pc:active:w-[30%] pc:h-[38px]'
				>
					Send
				</button>
			</div>

			<button className='mt-[4rem] mx-auto'>
				<a href='mailto:kennuuss1@gmail.com'>
					<EnvelopeIcon />
				</a>
			</button>
		</div>
	)
}
