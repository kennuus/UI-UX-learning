import React from 'react'
import styles from './Education.module.css'

function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.top}>
        <div className={styles.top__description_container}>
          <span className={styles.top__line}/>
          <h3 className={styles.top__description}>LEARNING PATH</h3>
        </div>
        <h1 className={styles.top__title}>Education & Skills</h1>
      </div>
      <div className={styles.left}>
        <span className={styles.left__line}/>
        <div className={styles.left__items}>
          <div className={styles.left__item}>
            <img src="images/images__education/Circle.svg" className={styles.left__dot} />
            <h1 className={styles.left__title}>
              Kingston university
            </h1>
            <h3 className={styles.left__description}>
              Master's degree - Software Engineering
            </h3>
            <h6 className={styles.left__year}>
              2019 - 2021
            </h6>
          </div>
          <div className={styles.left__item}>
            <img src="images/images__education/Circle.svg" className={styles.left__dot} />
            <h1 className={styles.left__title}>
              Kingston university
            </h1>
            <h3 className={styles.left__description}>
              Bachelor's degree - Computer Engineering
            </h3>
            <h6 className={styles.left__year}>
              2015 - 2019
            </h6>
          </div>
          <div className={styles.left__item}>
            <img src="images/images__education/Circle.svg" className={styles.left__dot} />
            <h1 className={styles.left__title}>
              Westminster School
            </h1>
            <h3 className={styles.left__description}>
              Diploma's degree - Mathematics
            </h3>
            <h6 className={styles.left__year}>
              2013 - 2015
            </h6>
          </div>
        </div>
      </div>
      <h3 className={styles.description}>
        For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.
      </h3>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h6 className={styles.skill__title}>
            React
          </h6>
          <div className={styles.skill__line_container}>
            <span className={styles.skill__line}/>
            <span className={`${styles.skill__line_knowledge} ${styles.skill__line_react}`}/>
          </div>
        </div>
        <div className={styles.skill}>
          <h6 className={styles.skill__title}>
            Angular
          </h6>
          <div className={styles.skill__line_container}>
            <span className={styles.skill__line}/>
            <span className={`${styles.skill__line_knowledge} ${styles.skill__line_angular}`}/>
          </div>
        </div>
        <div className={styles.skill}>
          <h6 className={styles.skill__title}>
            JavaScript
          </h6>
          <div className={styles.skill__line_container}>
            <span className={styles.skill__line}/>
            <span className={`${styles.skill__line_knowledge} ${styles.skill__line_js}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education