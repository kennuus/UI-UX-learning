import React, { Fragment } from "react"
import styles from './Header.module.css'
import { NavLink, Link } from "react-router-dom";

function Header(/* {scroll, refServices} */) {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <svg className={styles.header__logo} width="114" height="41" viewBox="0 0 114 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_267)">
            <path d="M56.3 30.5001H59.8L61.1 26.7001H68L69.3001 30.5001H72.9001L66.7 12.6001H62.5L56.3 30.5001ZM62 23.8001L64.5 16.3001L67 23.8001H62Z" fill="#232E35"/>
            <path d="M74.5 30.5H77.6V12.3H74.5V30.5Z" fill="#232E35"/>
            <path d="M86.8 30.7999C88.1 30.7999 89.3 30.5 90.3 29.9C91.3 29.2999 92 28.5 92.4 27.6L89.9 26.4C89.6 26.9 89.2 27.3 88.7 27.6C88.2 27.9 87.6 28.1 86.9 28.1C86 28.1 85.2 27.8 84.5 27.2C83.8 26.6 83.5 25.9 83.4 24.9H92.8C92.9 24.7 92.9 24.4999 92.9 24.2999C92.9 24.0999 92.9 23.8 92.9 23.6C92.9 22.4 92.7 21.4 92.2 20.4C91.7 19.4 91 18.7 90 18.1C89.1 17.5 87.9 17.2 86.5 17.2C85.3 17.2 84.2 17.5 83.2 18.1C82.2 18.7 81.4 19.5 80.9 20.5C80.3 21.5 80.1 22.7 80.1 24C80.1 25.3 80.4 26.4 80.9 27.5C81.5 28.5 82.2 29.4 83.3 30C84.3 30.5 85.4 30.7999 86.8 30.7999ZM86.5 19.7C87.3 19.7 88 20 88.6 20.5C89.2 21 89.5 21.5999 89.5 22.4H83.4C83.6 21.4999 83.9 20.9 84.5 20.4C85.1 19.9999 85.8 19.7 86.5 19.7Z" fill="#232E35"/>
            <path d="M93.9 30.4999H97.6L100.3 26.3999L103 30.4999H106.7L102.2 23.8999L106.8 17.3999H103.1L100.4 21.4999L97.6 17.3999H93.9L98.5 23.8999L93.9 30.4999Z" fill="#232E35"/>
            <path d="M109.9 30.5001H113.1V27.1001H109.9V30.5001Z" fill="#232E35"/>
            <path d="M20 0.5C9 0.5 0 9.5 0 20.5C0 31.5 9 40.5 20 40.5C31 40.5 40 31.5 40 20.5C40 9.5 31 0.5 20 0.5ZM11.8 28C9.6 28 7.8 26.2 7.8 24C7.8 21.8 9.6 20 11.8 20C14 20 15.8 21.8 15.8 24C15.8 26.2 14 28 11.8 28ZM28.5 26.9C26.7 28 24.3 27.3 23.2 25.5L17.6 15.8C16.5 14 17.2 11.6 19 10.5C20.8 9.4 23.2 10.1 24.3 11.9L29.9 21.6C31 23.5 30.3 25.9 28.5 26.9Z" fill="#232E35"/>
            </g>
            <defs>
            <clipPath id="clip0_1_267">
            <rect width="114" height="41" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <nav className={styles.header__nav} role="navigation">
            <Link to='/services' className={styles.header__nav_item}>
              Services
            </Link>
            <Link to='/portfolios' className={styles.header__nav_item}>
              Portfolios
            </Link>
            <Link to='/experience' className={styles.header__nav_item}>
              Experience
            </Link>
            <Link to='/blog' className={styles.header__nav_item}>
              Blog
            </Link>
          </nav>
          
          <div  className={styles.header__right}>
            <svg  className={styles.header__theme_switch} width="25" height="49" viewBox="0 0 25 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.35449 29.5L3.504 28.7651C3.20486 28.7042 2.89868 28.8307 2.72977 29.085C2.56086 29.3393 2.56291 29.6706 2.73497 29.9227L3.35449 29.5ZM11.3545 15.5L11.3742 14.7503C11.0683 14.7422 10.7881 14.9209 10.6664 15.2017C10.5446 15.4824 10.6057 15.809 10.8207 16.0268L11.3545 15.5ZM21.1045 24.5C21.1045 19.1857 16.7618 14.8919 11.3742 14.7503L11.3348 16.2497C15.9486 16.371 19.6045 20.0373 19.6045 24.5H21.1045ZM11.3545 34.25C16.8956 34.25 21.1045 29.8776 21.1045 24.5H19.6045C19.6045 29.0653 16.0511 32.75 11.3545 32.75V34.25ZM2.73497 29.9227C4.54749 32.5791 7.90248 34.25 11.3545 34.25V32.75C8.34871 32.75 5.48025 31.2847 3.97401 29.0773L2.73497 29.9227ZM3.20499 30.2349C7.54605 31.118 11.2664 28.8566 13.1176 25.6399C14.9712 22.4189 15.0076 18.1336 11.8883 14.9732L10.8207 16.0268C13.3843 18.6242 13.3967 22.1476 11.8175 24.8917C10.236 27.6399 7.11497 29.4996 3.504 28.7651L3.20499 30.2349Z" fill="#232E35"/>
            </svg>
            <button  className={styles.header__btn}>
              Resume
            </button>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Header