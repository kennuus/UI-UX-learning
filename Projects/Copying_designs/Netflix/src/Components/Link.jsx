import React from 'react'

function Link({ title }) {
	return (
		<li>
			<a className='cursor-pointer text-white hover:text-[rgb(229,229,229)] hover:duration-100 ml-[18px]'>
				{title}
			</a>
		</li>
	)
}

export default Link
