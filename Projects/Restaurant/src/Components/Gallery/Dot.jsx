import React from 'react'

export default function Dot({ active }) {
	return (
		<div className='h-2 w-2 inline-block rounded-full bg-slate-500 mx-1'>
			{active ? (
				<div className='bg-white h-1 w-1 rounded-full mx-auto my-[2px]' />
			) : (
				''
			)}
		</div>
	)
}
