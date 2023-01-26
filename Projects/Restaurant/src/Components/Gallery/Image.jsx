import React from 'react'

export default function Image({ image }) {
	return (
		<img src={image} className='rounded-md max-h-[500px]' alt='Image is no more avilable' />
	)
}
