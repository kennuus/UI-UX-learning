import React from 'react'

function Header() {
  return (
    <header className='fixed justify-center h-14 top-[-1px] left-[50%] ml-[-200px] w-[400px] rounded-b-xl shadow-md '>
      <nav className='flex justify-center'>
        <button className='py-4 text-center hover:underline hover:opacity-100 opacity-75 underline-offset-4'>
          Home
        </button>
      </nav> 
    </header>
  )
}

export default Header 