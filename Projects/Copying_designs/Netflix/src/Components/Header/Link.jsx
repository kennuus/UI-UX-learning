import React from 'react'

function Link({ title, url }) {
	return (
		<a href={url} className='cursor-pointer text-white hover:text-[rgb(229,229,229)] hover:duration-100 h-[100%] w-[100%] flex items-center justify-center'>
			{title}
		</a>
	)
}

export default Link
