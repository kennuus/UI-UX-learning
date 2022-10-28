import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.top}>
        <div className={styles.top__description_container}>
          <span className={styles.top__line}/>
          <h3 className={styles.top__description}>
            MY CLIENTS
          </h3>
        </div>
        <h1 className={styles.top__title}>
          Testimonials
        </h1>
      </div>
      <div className={styles.bot}>
        <div className={styles.bot__item}>
          <img src="images/images__testimonials/Avatar.png" className={styles.bot__img} />
          <h3 className={styles.bot__description}>
            We were very pleased to hear how you resolved our website`s user interface issues and challenges.
          </h3>
          <h6 className={styles.bot__name}>
            Amelia Miller
          </h6>
          <div className={styles.bot__job_container}>
            <h3 className={styles.bot__job}>
              Designer
            </h3>
          </div>
        </div>
        <div className={styles.bot__item}>
          <img src='images/images__testimonials/Avatar2.png'className={styles.bot__img} />
          <h3 className={styles.bot__description}>
            I’m glad I decided to work with you. The project was delivered on time with all the requirements.
          </h3>
          <h6 className={styles.bot__name}>
            James Delaney
          </h6>
          <div className={styles.bot__job_container}>
            <h3 className={styles.bot__job}>
              Developer
            </h3>
          </div>
        </div>
        <div className={styles.bot__item}>
          <img src='images/images__testimonials/Avatar3.png' className={styles.bot__img} />
          <h3 className={styles.bot__description}>
            The management of our projects was always faced with difficulties, but you handled these well.
          </h3>
          <h6 className={styles.bot__name}>
            Isabella Bennett
          </h6>
          <div className={styles.bot__job_container}>
            <h3 className={styles.bot__job}>
              Manager
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials