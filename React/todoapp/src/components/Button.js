import React from 'react';
import Textbox from './Textbox'

const Btn = ({ textClr, backClr, text}) => {
  /* function HandleClick(){
    setList([{title: {inputRef}, id:'id2'}])
  } */
  return(
  <button /* onClick={HandleClick()} */ className='button' style={{color: textClr, backgroundColor: backClr }}>
    {text}
  </button>)
}

export default Btn