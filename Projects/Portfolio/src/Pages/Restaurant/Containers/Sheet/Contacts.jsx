import React from 'react'

export default function Contacts(props) {
	const inputs = [
		{
			placeholder: 'Name',
		},
		{
			placeholder: 'Your mail',
		},
		{
			placeholder: 'Description',
			type: 'textarea',
		},
	]
	return (
		<div className='flex flex-col justify-center' ref={props.refContacts}>
			<h2>Contacts</h2>

			<form onSubmit={console.log('Form was submited')}>
				<div className='flex flex-col pc:gap-[2vh] gap-[8rem]  items-center'>
					{inputs.map((item, i) =>
						item.type === 'textarea' ? (
							<textarea
								key={i}
								className={`px-4 pc:px-[1vw] py-[1rem] pc:py-[3vh] bg-lighter-brown
								dark:bg-light-brown
								placeholder-white
								text-[1.4rem]
								pc:text-[1rem]
								rounded-b-md 
								w-[100%]
								outline-none`}
								name={item.placeholder}
								placeholder={item.placeholder}
								required
							/>
						) : (
							<input
								key={i}
								className={`${i === 0 && ' rounded-t-md '} px-4 pc:px-[1vw] py-[1rem] pc:py-[3vh] bg-lighter-brown
								dark:bg-light-brown
								placeholder-white
								text-[1.4rem]
								pc:text-[1rem]
								w-[100%]
								outline-none`}
								type='text'
								name={item.placeholder}
								id={item.placeholder}
								placeholder={item.placeholder}
								required
							/>
						)
					)}
					<button
						type='submit'
						className='rounded-full hover:scale-100 bg-lighter-brown dark:bg-light-brown 
						w-[50%] pc:w-[30%] pc:hover:w-[35%] pc:active:w-[30%] pc:h-[38px]'
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
