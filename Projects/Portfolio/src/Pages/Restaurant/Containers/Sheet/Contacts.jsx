import React from 'react'
import Line from '../../Components/Line'

export default function Contacts(props) {
	return (
		<div className='flex flex-col justify-center' ref={props.refContacts}>
			<h2>Contacts</h2>

			<Line showAlways={true} />

			<form onSubmit={console.log('Form was submited')}>
				<div className='flex flex-col gap-[0.5rem] pc:gap-[1.5vh]'>
					<input placeholder='Name' type='text' required />
					<input placeholder='Your mail' type='text' required />
					<textarea placeholder='Description' rows={3} type='text' required />
				</div>
				<button
					type='submit'
					className='rounded-full hover:scale-100 bg-lighter-brown dark:bg-light-brown 
					w-[50%] pc:w-[30%] pc:hover:w-[35%] pc:active:w-[30%] pc:h-[38px]'
				>
					Send
				</button>
			</form>

			<button className='mt-[4rem] mx-auto'>
				<a href='mailto:kennuuss1@gmail.com'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
						<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
					</svg>
				</a>
			</button>
		</div>
	)
}
