import React from 'react'

export default function Contacts(props) {
	return (
		<div className='flex flex-col justify-center' ref={props.refContacts}>
			<h2>Contacts</h2>

			<form onSubmit={console.log('Form was submited')}>
				<div className='flex flex-col pc:gap-[2vh] gap-[1rem]  items-center'>
					<input
						type='text'
						className='px-4 pc:px-[1vw] py-[0.5rem] pc:py-[1.5vh] bg-lighter-brown dark:bg-light-brown placeholder-white text-[1.4rem] pc:text-[1rem]
								rounded-md 
								w-[100%]
								outline-none'
						placeholder='Your Name'
						required
					/>
					<input
						className='px-4 pc:px-[1vw] py-[0.5rem] pc:py-[1.5vh] bg-lighter-brown dark:bg-light-brown placeholder-white text-[1.4rem] pc:text-[1rem]
								rounded-md 
								w-[100%]
								outline-none'
						type='mail'
						placeholder='Your Mail'
						required
					/>
					<textarea
						className={`px-4 pc:px-[1vw] py-[0.5rem] pc:py-[1.5vh] bg-lighter-brown
								dark:bg-light-brown
								placeholder-white
								text-[1.4rem]
								pc:text-[1rem]
								rounded-md 
								w-[100%]
								outline-none`}
						rows={4}
						placeholder='Your Feedback'
						required
					/>

					<button
						type='submit'
						className='rounded-full hover:scale-100 bg-lighter-brown dark:bg-light-brown py-[0.5rem] pc:py-[1.5vh] 
						w-[50%] pc:w-[30%] pc:hover:w-[35%] pc:active:w-[30%] transition-all'
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
