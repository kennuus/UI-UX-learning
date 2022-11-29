import React from 'react'
import './Responsive_Images.css'

function Responsive_Images() {
  return (
    <img 
    srcSet='my-channel.jpg 88w, autor.jpg 176w, thumbnail-1.webp 720w'
    sizes='(max-width: 320px) 170px,(max-width:480px) 440px' 
    src="thumbnail-1.webp"
    className="res_images__img" />
  )
}

export default Responsive_Images