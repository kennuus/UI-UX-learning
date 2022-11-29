import React from 'react'

function Meaningful_Text() {
  return (
    <div>
      {/* at links you should add some context for object that you add link to  */}
      {/* not way much context */}
      <a className='flex' href="https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-meaningful-text"> 
        click here for begin lessons at CSS and HTML
      </a>
      {/* way lot better context */}
      <a className='flex' href="https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-meaningful-text"> 
        Meaningful Text lesson by The Odin Project
      </a>

      {/* at links for some donwloads you should add some information about that file */}
      <a className='flex' href="some document">Document (TXT, 3MB)</a>

      {/* shows that it does opens in new tab */}
      <a className='flex' target='_blank' href="https://github.com/">GitHub ↗</a>

      {/* empty alt will not be dictated in screen readers */}
      <img src="decorative_cat.png" alt="" />
      {/* important cat */}
      <img src="important_cat.png" alt="cat" />
    </div>
  )
}

export default Meaningful_Text