import React from 'react'

export default function ListItem({title, img}) {
  return (
    <li className='py-[5px] px-[10px] '>
      <a>
        {img}
        <span>
          {title}
        </span>
      </a>
    </li>
  )
}