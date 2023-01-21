import React from 'react'

export default function Row({ title }) {
	return (
		<div className='block my-[3vw] text-white'>
			<h2 /* title */>
				<a>{title}</a>
			</h2>
			<div /* slider */ className='px-[4%]'>
        {Array(4).fill().map(
          <li>
            
          </li>
        )}
			</div>
		</div>
	)
}
