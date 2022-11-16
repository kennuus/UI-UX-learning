import React, { Fragment } from 'react'
import './Experience.css'

function Experience() {
  return (
    <Fragment>
      <div className="experience">
        <div className="left">
          <div className="left__top">
            <div className="left__career-path">
              <span className="left__career-line"/>
              <h3 className="left__career-path">
                CAREER PATH
              </h3>
            </div>
            <h1 className="left__title">
              Work Experices
            </h1>
          </div>
          <div className="left__btns">
            <div className="left__btn left__btn-activated">
              <h3 className='left__btn-text'>
                Apple
              </h3>
            </div>
            <div className="left__btn">
              <h3 className='left__btn-text'>
                Microsoft
              </h3>
            </div>
            <div className="left__btn">
              <h3 className='left__btn-text'>
                Facebook
              </h3>
            </div>
            <div className="left__btn">
              <h3 className='left__btn-text'>
                Slack
              </h3>
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className="right__title">
            Front-end Developer <span className="right__title-under">Apple .Inc</span> 
          </h1>
          <h3 className="right__location">
            California, United States
          </h3>
          <h3 className="right__period">
            Nov 2020 - Present · Full-time
          </h3>
          <div className="right__btns">
            <button className="right__btn">Swift</button>
            <button className="right__btn">Go</button>
          </div>
          <div className='right__line'/>
          <div className="right__points">
            <div className="right__point">
              <span className="right__line-point"/>
              <h3 className="right__point-text">Improving overall website performance for mobile users.</h3>
            </div>
            <div className="right__point">
              <span className="right__line-point"/>
              <h3 className="right__point-text">Collaborate with back-end developers and web designers to improve usability.</h3>
            </div>
            <div className="right__point">
              <span className="right__line-point"/>
              <h3 className="right__point-text">Add voice search feature for mobile app.</h3>
            </div>
            <div className="right__point">
              <span className="right__line-point"/>
              <h3 className="right__point-text">Developing an admin panel to manage contents, users, products and ...</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Experience