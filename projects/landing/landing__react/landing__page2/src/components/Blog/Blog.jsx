import React from 'react'
import './Blog.css'
import bot__one from '../../assets/blog1.png'

function Blog() {
  return (
    <div className='blog'>
      <div className="top">
        <div className="top__articles-container">
          <span className="top__line"/>
          <h3 className='top__articles'>
            MY ARTICLES
          </h3>
        </div>
        <h1 className="top__title">
          Personal Blog
        </h1>
      </div>
      <div className="bot">
        <div className="bot__item">
          <img src='images/images__blog/blog1.png' className='bot__thumbnail'/>
          <div className="bot__details">
            <h1 className='bot__title'>
              How to prototype in figma
            </h1>
            <div className="bot__date-container">
              <h6 className="bot__date">
                July 15, 2021
              </h6>
            </div>
            <h3 className="bot__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, earum.
            </h3>
            <h6 className="bot__btn">
              Continue Reading 
            </h6>
          </div>
        </div>
        <div className="bot__item">
          <img src='images/images__blog/blog3.png' className='bot__thumbnail'/>
          <div className="bot__details">
            <h1 className='bot__title'>
              Being more productive with Notion.
            </h1>
            <div className="bot__date-container">
              <h6 className="bot__date">
                Aug 8, 2020
              </h6>
            </div>
            <h3 className="bot__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, earum.
            </h3>
            <h6 className="bot__btn">
              Continue Reading 
            </h6>
          </div>
        </div>
        <div className="bot__item">
          <img src='images/images__blog/blog2.png' className='bot__thumbnail'/>
          <div className="bot__details">
            <h1 className='bot__title'>
              Beginners guide to adobe illustrator
            </h1>
            <div className="bot__date-container">
              <h6 className="bot__date">
                Feb 19, 2021
              </h6>
            </div>
            <h3 className="bot__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, earum.
            </h3>
            <h6 className="bot__btn">
              Continue Reading 
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog