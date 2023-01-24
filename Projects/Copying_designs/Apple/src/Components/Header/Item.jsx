import React from 'react'

export default function Item(props) {
  return (
    <li className='h-[100%] px-[0.5rem] flex items-center whitespace-nowrap'>
      <a className=' text-[0.8rem] font-light cursor-pointer'>
        {props.Item}
      </a>
    </li>
  )
}