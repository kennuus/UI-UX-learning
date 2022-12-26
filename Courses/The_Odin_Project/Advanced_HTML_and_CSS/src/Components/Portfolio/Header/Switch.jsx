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
    aria-label='theme switch' 
    className='fixed  right-6 my-[14px] h-[30px] w-[30px]' >
      <SunIcon className='md:text-white dark:block hidden'/>
      <MoonIcon className='md:text-black dark:hidden'/>
    </button>
  )
}
