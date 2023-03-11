import React from 'react'

export default function Line({ vertical }) {
	return (
		<div
			className={`rounded-full bg-white ${
				vertical
					? 'mx-4 h-full w-[2px] pc:mx-[1vh]'
					: 'my-[1rem] h-[2px] w-full pc:my-[1vh]'
			}`}
		/>
	)
}
