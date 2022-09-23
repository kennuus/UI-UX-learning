import React from 'react';

const Btn = ({ textClr, backClr, text}) => {
  return(
  <button /* onClick={HandleClick()} */ className='button' style={{color: textClr, backgroundColor: backClr }}>
    {text}
  </button>)
}

export default Btn