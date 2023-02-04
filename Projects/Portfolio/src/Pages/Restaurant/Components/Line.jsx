import React from 'react'

export default function Line({ vertical, showOnPc, showAlways }) {
	return (
		<div
			className={`bg-white rounded-full ${
				vertical
					? 'h-[100%] w-[2px] mx-4 pc:mx-2'
					: 'w-[100%] h-[2px] my-[1rem] pc:my-[0.5rem]'
			} ${
				showAlways
				? 'block'
				: showOnPc
					? 'pc:block hidden'
					: 'block pc:hidden'
			}`}
		/>
	)
}
