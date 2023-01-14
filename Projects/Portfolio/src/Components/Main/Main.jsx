import React from 'react'
import ScrollOnTopBtn from './ScrollOnTopBtn'
import AboutMeMore from './AboutMeMore'
import Switch from '../Header/Switch'

function Main() {
  return (
    <main className='dark:bg-black dark:text-white w-[100%] h-[2000px]'>
      <div className="relative w-max h-max mx-16 md:mx-36 top-[110px]">
        <h1 className='absolute w-max text-[48px] font-bold'>
          Hello ✌️
        </h1>
        <h3 className='absolute top-28 w-max text-[20px]'>
          I am a <span className='dark:bg-white dark:text-black bg-black text-white rounded-sm'>UI-UX designer.</span>
        </h3>
        <AboutMeMore />
      </div>
      <ScrollOnTopBtn />
      <Switch className='hidden md:block'/>
    </main>
  )
}

export default Main