import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="portfolio__top">
        <div className="portfolio__top-left">
          <div className="portfolio__my-works">
            <span className='portfolio__my-works-line'/>
            <h3 className='portfolio__my-works-title'>MY WORKS</h3>
          </div>
          <h1 className='portfolio__featured-portfoios'>
            Featured Portfoios
          </h1>
        </div>
        <div className="portfolio__nav">
          <div className="portfolio__nav-left portfolio__nav-item">
            <svg className='portfolio__nav-arrow' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.53033 1.53033C6.82322 1.23744 6.82322 0.762563 6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L6.53033 1.53033ZM1 6L0.469669 5.46967C0.329017 5.61032 0.25 5.80109 0.25 6C0.25 6.19891 0.329017 6.38968 0.469669 6.53033L1 6ZM5.46967 11.5303C5.76256 11.8232 6.23744 11.8232 6.53033 11.5303C6.82322 11.2374 6.82322 10.7626 6.53033 10.4697L5.46967 11.5303ZM5.46967 0.46967L0.469669 5.46967L1.53033 6.53033L6.53033 1.53033L5.46967 0.46967ZM0.469669 6.53033L5.46967 11.5303L6.53033 10.4697L1.53033 5.46967L0.469669 6.53033Z" fill="#7E74F1"/>
            </svg>
          </div>
          <div className="portfolio__nav-right portfolio__nav-item">
            <svg className='portfolio__nav-arrow' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6 6L6.53033 6.53033C6.67098 6.38968 6.75 6.19891 6.75 6C6.75 5.80109 6.67098 5.61032 6.53033 5.46967L6 6ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#7E74F1"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="portfolio__bot">
        <div className="portfolio__bot-item">
          <div className="portfolio__bot-item-container">
            <h6 className='portfolio__bot-item-title'>
              Agency Website.
            </h6>
            <div className="portfolio__bot-item-btns">
              <button className='portfolio__bot-item-btn'>
                WordPress
              </button>
              <svg className='portfolio__bot-item-link' width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 9.41421 12.5858 9.75 13 9.75V8.25ZM13 0.25C12.5858 0.25 12.25 0.585786 12.25 1C12.25 1.41421 12.5858 1.75 13 1.75V0.25ZM6 4.25C5.58579 4.25 5.25 4.58579 5.25 5C5.25 5.41421 5.58579 5.75 6 5.75V4.25ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM7 1.75C7.41421 1.75 7.75 1.41421 7.75 1C7.75 0.585786 7.41421 0.25 7 0.25V1.75ZM7 9.75C7.41421 9.75 7.75 9.41421 7.75 9C7.75 8.58579 7.41421 8.25 7 8.25V9.75ZM15 1.75C16.7949 1.75 18.25 3.20507 18.25 5H19.75C19.75 2.37665 17.6234 0.25 15 0.25V1.75ZM18.25 5C18.25 6.79493 16.7949 8.25 15 8.25V9.75C17.6234 9.75 19.75 7.62335 19.75 5H18.25ZM15 8.25H13V9.75H15V8.25ZM15 0.25H13V1.75H15V0.25ZM6 5.75H14V4.25H6V5.75ZM5 8.25C3.20507 8.25 1.75 6.79493 1.75 5H0.25C0.25 7.62335 2.37665 9.75 5 9.75V8.25ZM1.75 5C1.75 3.20507 3.20507 1.75 5 1.75V0.25C2.37665 0.25 0.25 2.37665 0.25 5H1.75ZM5 1.75H7V0.25H5V1.75ZM5 9.75H7V8.25H5V9.75Z" fill="#656D72"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="portfolio__bot-item">
          <div className="portfolio__bot-item-container">
            <h6 className='portfolio__bot-item-title'>Dashboard Website.</h6>
            <div className="portfolio__bot-item-btns">
              <button className='portfolio__bot-item-btn'>
                React
              </button>
              <svg className='portfolio__bot-item-link' width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 9.41421 12.5858 9.75 13 9.75V8.25ZM13 0.25C12.5858 0.25 12.25 0.585786 12.25 1C12.25 1.41421 12.5858 1.75 13 1.75V0.25ZM6 4.25C5.58579 4.25 5.25 4.58579 5.25 5C5.25 5.41421 5.58579 5.75 6 5.75V4.25ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM7 1.75C7.41421 1.75 7.75 1.41421 7.75 1C7.75 0.585786 7.41421 0.25 7 0.25V1.75ZM7 9.75C7.41421 9.75 7.75 9.41421 7.75 9C7.75 8.58579 7.41421 8.25 7 8.25V9.75ZM15 1.75C16.7949 1.75 18.25 3.20507 18.25 5H19.75C19.75 2.37665 17.6234 0.25 15 0.25V1.75ZM18.25 5C18.25 6.79493 16.7949 8.25 15 8.25V9.75C17.6234 9.75 19.75 7.62335 19.75 5H18.25ZM15 8.25H13V9.75H15V8.25ZM15 0.25H13V1.75H15V0.25ZM6 5.75H14V4.25H6V5.75ZM5 8.25C3.20507 8.25 1.75 6.79493 1.75 5H0.25C0.25 7.62335 2.37665 9.75 5 9.75V8.25ZM1.75 5C1.75 3.20507 3.20507 1.75 5 1.75V0.25C2.37665 0.25 0.25 2.37665 0.25 5H1.75ZM5 1.75H7V0.25H5V1.75ZM5 9.75H7V8.25H5V9.75Z" fill="#656D72"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="portfolio__bot-item">
          <div className="portfolio__bot-item-container">
            <h6 className='portfolio__bot-item-title'>Support Center Website.</h6>
            <div className="portfolio__bot-item-btns">
              <button className='portfolio__bot-item-btn'>
                PHP
              </button>
              <svg className='portfolio__bot-item-link' width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 9.41421 12.5858 9.75 13 9.75V8.25ZM13 0.25C12.5858 0.25 12.25 0.585786 12.25 1C12.25 1.41421 12.5858 1.75 13 1.75V0.25ZM6 4.25C5.58579 4.25 5.25 4.58579 5.25 5C5.25 5.41421 5.58579 5.75 6 5.75V4.25ZM14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25V5.75ZM7 1.75C7.41421 1.75 7.75 1.41421 7.75 1C7.75 0.585786 7.41421 0.25 7 0.25V1.75ZM7 9.75C7.41421 9.75 7.75 9.41421 7.75 9C7.75 8.58579 7.41421 8.25 7 8.25V9.75ZM15 1.75C16.7949 1.75 18.25 3.20507 18.25 5H19.75C19.75 2.37665 17.6234 0.25 15 0.25V1.75ZM18.25 5C18.25 6.79493 16.7949 8.25 15 8.25V9.75C17.6234 9.75 19.75 7.62335 19.75 5H18.25ZM15 8.25H13V9.75H15V8.25ZM15 0.25H13V1.75H15V0.25ZM6 5.75H14V4.25H6V5.75ZM5 8.25C3.20507 8.25 1.75 6.79493 1.75 5H0.25C0.25 7.62335 2.37665 9.75 5 9.75V8.25ZM1.75 5C1.75 3.20507 3.20507 1.75 5 1.75V0.25C2.37665 0.25 0.25 2.37665 0.25 5H1.75ZM5 1.75H7V0.25H5V1.75ZM5 9.75H7V8.25H5V9.75Z" fill="#656D72"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio