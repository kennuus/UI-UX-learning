import React from 'react'

export default function Avatar({img}) {
  return (
    <img src={img} alt='Avatar' className='h-[32px] w-[32px] rounded-[4px]' />
  )
}
