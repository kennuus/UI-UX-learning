import React from 'react'

function Header() {
  return (
    <header className='fixed flex justify-center h-16 top-0 left-0 right-0'>
      <nav className='flex justify-center'>
        <button className='h-min'>Home</button>
      </nav> 
    </header>
  )
}

export default Header