import React from 'react'
import Switch from './Switch'

function Header() {
  return (
    <header className='dark:bg-slate-600 bg-white  z-[100] fixed flex justify-center h-18 top-[-1px] left-[50%] ml-[-300px] w-[600px] rounded-b-xl shadow-md '>
      <nav className='dark:text-white flex justify-center'>
        <button className='py-4 text-center hover:underline hover:opacity-100 opacity-75 underline-offset-4'>
          About Me
        </button>
        <Switch />
      </nav> 
    </header>
  )
}

export default Header 