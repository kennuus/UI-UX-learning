import React from 'react'

function Aria() {
  return (
    <div>
      <button aria-label='close window'>X</button>

      <h1 id='tshort'>Tshort</h1>
      <button aria-labelledby='tshort buy'>Buy Now</button>

      <div className="flex">
        <label for='mail'>mail:</label>
        <input type="text" id='mail' />
      </div>

      <label>
        Login:
        <input type="text" aria-describedby='Login_requirements' />
        <span id='Login_requirements' aria-hidden='true' className='hidden'>requirements: Login must be login, at least have 5 characters, no specific signs</span>
      </label>
    </div>
  )
}

export default Aria