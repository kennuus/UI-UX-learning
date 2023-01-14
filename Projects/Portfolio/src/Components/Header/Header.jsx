import React from 'react'
import Switch from './Switch'

function Header() {
  return (
    <header className='
    dark:bg-white dark:text-black 
    text-white bg-black
    hover:duration-100 z-[100] fixed flex justify-center h-18 shadow-md 

    left-0 right-0 top-0 rounded-b-none
    sm:left-[50%] sm:ml-[-300px] sm:w-[600px] sm:rounded-b-xl 
    '>
      <nav className='flex justify-center gap-8'>
        <button className='my-4 text-center hover:underline hover:opacity-100 opacity-75 underline-offset-4'>
          Projects
        </button>
        <Switch className='md:hidden' phoneTheme={true}/>
      </nav> 
    </header>
  )
}

export default Header 