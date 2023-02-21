import React from 'react'

export default function Line({ vertical }) {
	return (
		<div
			className={`bg-white rounded-full ${
				vertical
					? 'h-[100%] w-[2px] mx-4 pc:mx-[1vh]'
					: 'w-[100%] h-[2px] my-[1rem] pc:my-[1vh]'
			}`}
		/>
	)
}
