import React from 'react'
import { useState } from 'react'

export default function ScrollOnTopBtn() {
  const [showBtn, setShow] = useState(false)
  window.onscroll = function () {scrollTopChecker200Px()}
  
  const scrollTopChecker200Px = () => {
    document.documentElement.scrollTop < 200 ? (setShow(false)) : (setShow(true))
  }

  const btn = () => {
    return(
      <button 
      onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
      className='
      dark:text-black dark:bg-white bg-black text-white 
      hover:scale-125 hover:duration-100 
      shadow-md rounded-3xl text-xl z-[1000]
      fixed right-6 bottom-[160px] 
      h-12 w-12 sm:h-10 sm:w-10 sm:bottom-6
      '>
        ↑
      </button>
    )
  }
  return(
    showBtn ? (btn()) : ('')
  )
} 