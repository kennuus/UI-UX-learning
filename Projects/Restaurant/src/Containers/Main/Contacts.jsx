import React from 'react'
import Line from '../../Components/Line'

export default function Contacts(props) {
	return (
		<div
			className='flex flex-col items-center h-[80vh]'
			ref={props.refContacts}
		>
			<h2>Contacts</h2>
			<Line />

			<div className='flex flex-col items-center w-[100%] pc:w-[80%] gap-2'>
				<input
					placeholder='Name'
					type='text'
					required
					className='w-[100%] rounded-lg border-solid border-[1px] p-1'
				/>
				<input
					placeholder='Your mail'
					type='text'
					required
					className='w-[100%] rounded-lg border-solid border-[1px] p-1'
				/>
				<textarea
					rows={3}
					placeholder='Description'
					type='text'
					required
					className='w-[100%] rounded-lg border-solid border-[1px] p-1'
				/>
				<button
					className='py-[0.2rem] mt-[1rem]
					px-[3.4vw] hover:px-[4.4vw] active:px-[4vw] hover:scale-100 rounded-full 
					bg-black text-white text-[1.4rem] md:text-[1.8vw]'
				>
					Send
				</button>
			</div>
			<address className='mt-12'>
				<a href='mailto:kennuuss1@gmail.com'>kennuuss1@gmail.com</a>
			</address>
		</div>
	)
}
