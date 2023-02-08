import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Error() {
	const location = useLocation()
	return (
    <div className='flex justify-center flex-col items-center'>
      <div className="absolute top-[30%]">
        <h1>Oops!</h1>
        <h3 className='font-normal'>
          The path <code className='font-bold'>{location.pathname}</code> doesn`t
          actually exist.
        </h3>
      </div>
		</div>
	)
}
