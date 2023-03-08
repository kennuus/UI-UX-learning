import React from 'react'

export default function MdBtn(props) {
	return (
		<button
			className='bg-white-3 pc:hover:bg-black text-white
				 dark:bg-black-2 pc:dark:hover:bg-black-1 dark:text-gray-text 
				 font-bold pc:text-[1.4vw] text-[1.4rem] rounded-2xl h-[8vh] transition-colors pc:px-[3vw] px-[2rem]'
		>
			{props.children}
		</button>
	)
}
