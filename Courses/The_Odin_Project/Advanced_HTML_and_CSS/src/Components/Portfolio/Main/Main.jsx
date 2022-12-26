import React from 'react'
import ScrollOnTopBtn from './ScrollOnTopBtn'
import AboutMeMore from './AboutMeMore'
import Switch from '../Header/Switch'

function Main() {
  return (
    <main className='dark:bg-black dark:text-white w-[100%] h-[3000px]'>
      <div className="relative w-max h-max mx-16 md:mx-36 top-44">
        <h1 className='absolute w-max text-[48px] font-bold'>Hello ✌️</h1>
        <h3 className='absolute top-28 w-max text-[20px]'>
          I am a front-end developer from Ukraine
        </h3>
        <AboutMeMore />
      </div>
      <ScrollOnTopBtn />
      <Switch className='hidden md:block'/>
    </main>
  )
}

export default Main