import React from 'react'
import {useState} from 'react'

function AboutMeMore() {
  const [IsOpened, setIsOpened] = useState(false)

  /* BirthDay */
  const now = new Date()
  const programmingMonth = now.getMonth() - 7
  const programmingYears = now.getFullYear() - 2022
  const BirthDay = now.getFullYear() - 2006

  const btnAboutMe = () => {
    return( 
      <button onClick={() => setIsOpened(!IsOpened)} 
      className='dark:bg-white dark:text-black absolute top-[170px] w-max bg-black text-white'>
        <span className='absolute left-[-15px] text-black dark:text-white'>
          {IsOpened ? ('˅') : ('>')}
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
        absolute  top-[205px] 
        text-[18px] pl-4
        
        md:w-max w-fit'>
          My name is 
          <span className='dark:bg-white dark:text-black bg-black text-white'>
            {' '} Mark {' '}
          </span>
          , and I am {BirthDay} years old. <br />
          I learning Front-end programming for
          {' '}{programmingYears===0 ? (programmingMonth + ' months ') : (programmingYears + ' years ')} 
          and this is my Portfolio.<br />
          I`m from Ukraine and I created this site to improve my skills and <br /> 
          {' '} my potential employers get to know me better before interacting with me. <br />
          I believe it's easier to build good relationships from the very beginning.
        </h3>
      </div>
    )
  }

  return (
    IsOpened ? btnAboutMeFull() : btnAboutMe()
  )
}

export default AboutMeMore