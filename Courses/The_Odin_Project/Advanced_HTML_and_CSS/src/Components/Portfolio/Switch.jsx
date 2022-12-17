import React from 'react'
import {MoonIcon, SunIcon} from '@heroicons/react/20/solid'


export default function Switch() {
  /* ADDICTIONAL FUNCTIONS */
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
    <button onClick={() => themeSwitch()} role='switch' aria-label='theme switch' className='my-4 absolute right-3 h-[20px] w-[20px]' >
      <SunIcon className='dark:block hidden'/>
      <MoonIcon className='dark:hidden'/>
      {/* {document.documentElement.classList.contains('dark') ? (<SunIcon />) : (<MoonIcon />)} */}
    </button>
  )
}
