import React from 'react'
import Line from '../../Components/Line'

export default function Contacts(props) {
	return (
		<div
			className='flex flex-col justify-center'
			ref={props.refContacts}
		>
			<h2>Contacts</h2>
			<Line />

			<div className='flex flex-col items-center justify-center gap-2 '>
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
					className='py-[0.2rem] px-[3rem] pc:px-[3.4vw] mt-[1rem] 
					sm:active:px-[4vw] pc:hover:px-[4.4vw] active:px-[2rem]
					rounded-full  text-[1.4rem] pc:text-[1.4vw] hover:scale-100 transition-all
					bg-black text-white dark:bg-white dark:text-black'
				>
					Send
				</button>
			</div>
			<address className='mt-12 text-center'>
				<a href='mailto:kennuuss1@gmail.com'>kennuuss1@gmail.com</a>
			</address>
		</div>
	)
}
