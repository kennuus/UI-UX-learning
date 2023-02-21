import React from 'react'

export default function ProjectTag({ upwork }) {
	return (
		<div
			className={`${
				upwork ? 'bg-green-500' : 'bg-red-500'
			} rounded-sm px-1 h-[80%] text-[1.4rem] pc:text-[1.4vw] text-white`}
		>
			{upwork ? 'Upwork' : 'Personal'}
		</div>
	)
}
