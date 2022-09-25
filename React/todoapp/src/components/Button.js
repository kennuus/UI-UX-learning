import React from 'react';

const Btn = ({ height, width, textClr, backClr, text}) => {
  return(
  <button /* onClick={HandleClick()} */ className='button' style={{height: height, width: width, color: textClr, backgroundColor: backClr }}>
    {text}
  </button>)
}

export default Btn