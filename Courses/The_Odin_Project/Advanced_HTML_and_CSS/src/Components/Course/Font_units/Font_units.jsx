import React from 'react'
import './Font_units.css'

function Font_units() {
  return (
    <div>
      em
      <div>
        16 px
        <div className="font__em">
          1.5 em (24px)
        </div>
      </div><br />
      %
      <div>
        16 px
        <div className="font__perc">
          150% (24px)
        </div>
        <div className="font__perc2">
          200% (32px)
        </div>
      </div><br />
      <br />
      rem
      <div>
        16 px in html styles
        <div className="font__rem">
          2rem (32px)
        </div>
      </div>
    </div>
  )
}

export default Font_units