import React from 'react'

export default function FooterIcon(props) {
	return (
    <button
      className='pc:hover:scale-125 pc:w-[36px] pc:h-[36px] w-[48px] h-[48px]'>
			<a href={props.link}>{props.svg}</a>
		</button>
	)
}
