import React from 'react'

function Header() {
  return (
    <div class='fixed top-0 left-0 w-full h-24 flex justify-center opacity-80 bg-white mx-auto gap-40'>
      <a class='cursor-pointer hover:opacity-80 inline-block'>Home</a>
      <a class='cursor-pointer hover:opacity-80 inline-block'>About</a>
      <a class='cursor-pointer hover:opacity-80 inline-block'>Projects</a>
    </div>
  )
}

export default Header