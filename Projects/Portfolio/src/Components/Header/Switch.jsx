import React from 'react'
import {MoonIcon, SunIcon} from '@heroicons/react/20/solid'

export default function Switch() {
  const setDarkTheme = () => {
    document.documentElement.classList.add('dark')
  }
  const setLightTheme = () => {
    document.documentElement.classList.remove('dark')
  }

  window.matchMedia('(prefers-color-scheme: dark)').matches ? (setDarkTheme()) : (setLightTheme())

  const themeSwitch = () => {
    document.documentElement.classList.contains('dark') ? (setLightTheme()) : (setDarkTheme())
  }

  return (
    <button onClick={() => themeSwitch()} 
    role='switch' 
    aria-label='theme switcher' 
    className='fixed right-6 my-[14px] sm:h-[30px] sm:w-[30px] h-[38px] w-[38px] sm:hover:scale-125 hover:duration-100' >
      <SunIcon className='sm:text-white dark:block hidden'/>
      <MoonIcon className='sm:text-black dark:hidden'/>
    </button>
  )
}
