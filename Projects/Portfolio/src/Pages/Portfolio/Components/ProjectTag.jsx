import React from 'react'

export default function ProjectTag({ upwork }) {
	return (
		<div
			className={`${
				upwork ? 'bg-green-500' : 'bg-red-500'
			} rounded-sm px-1 text-white`}
		>
			{upwork ? 'Upwork' : 'Personal'}
		</div>
	)
}
