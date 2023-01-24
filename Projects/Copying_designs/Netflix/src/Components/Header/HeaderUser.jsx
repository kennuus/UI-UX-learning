import React from 'react'
import Avatar from './Avatar'

function HeaderUser({ img, name }) {
	return (
		<li className='py-[5px] px-[10px] w-[100%] h-[43px] text-white flex items-center gap-[10px] text-[13px]'>
			<Avatar img={img} />
			<span className='w-[100px] hover:underline cursor-pointer'>{name}</span>
		</li>
	)
}

export default HeaderUser
