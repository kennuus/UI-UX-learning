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
      id='scrollToTopBtn' 
      className='
      dark:text-black dark:bg-white 
      bg-black  text-white 
      hover:scale-125 shadow-md fixed right-36 bottom-24 h-12 w-12 rounded-3xl text-2xl hover:duration-100 z-[1000]'>
        ↑
      </button>
    )
  }
  return(
    showBtn ? (btn()) : ('')
  )
} 