import React from 'react'
import {useRef} from 'react';

function Textbox(id) {
  const inputRef = useRef(null)
  return (
    <>
      <input ref={inputRef} id={id} type='text' className="todos__input" placeholder='Type here'/>
    </>
  )
}

export default Textbox