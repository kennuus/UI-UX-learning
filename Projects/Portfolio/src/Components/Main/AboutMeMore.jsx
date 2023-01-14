import React from 'react'
import {useState} from 'react'

function AboutMeMore() {
  const [IsOpened, setIsOpened] = useState(false)

  const btnAboutMe = () => {
    return( 
      <button onClick={() => setIsOpened(!IsOpened)} 
      className='dark:bg-white dark:text-black absolute top-[170px] w-max bg-black text-white rounded-sm text-[18px]'>
        <span className='absolute left-[-15px] text-black dark:text-white'>
          {IsOpened ? ('▾') : ('▸')}
        </span>
         More About Me 
      </button>
    )
  }

  const btnAboutMeFull = () => {
    return(
      <div>
        {btnAboutMe()}
        <h3 
        className='
        absolute top-[205px]
        sm:w-[460px]
        px-4'>
          My name is 
          <span className='dark:bg-white dark:text-black bg-black text-white rounded-sm'>
            {' '} Sabina {' '}
          </span>.<br />
          I`m learning Web-programming for 
          <span className='dark:bg-white dark:text-black bg-black text-white rounded-sm'>
            {' '}6 months{' '}
          </span>.<br />
          I created this web site as an example of project and bring here some information about work, that i want to do.<br /> 
        </h3>
      </div>
    )
  }

  return (
    IsOpened ? btnAboutMeFull() : btnAboutMe()
  )
}

export default AboutMeMore