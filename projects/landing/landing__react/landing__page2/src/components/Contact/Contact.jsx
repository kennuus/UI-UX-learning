import React, { Fragment } from 'react'
import styles from './Contact.module.css'


function Contact() {  
  return (
    <Fragment>
      <div className={styles.contact}>
        <div className={styles.forms}>
          <input type="text" placeholder='Name' className={`${styles.forms__input} ${styles.forms__input1}`}/>
          <input type="text" placeholder='Email' className={`${styles.forms__input} ${styles.forms__input2}`}/>
          <input type="text" placeholder='Message' className={`${styles.forms__input} ${styles.forms__input3}`}/>
          <button className={styles.forms__btn}>Send Message</button>
        </div>
        <div className={styles.info}>
          <div className={`${styles.info__item} ${styles.info__item1}`}>
            <div className={styles.info__item_text}>
              <h1 className={styles.info__title}>
                Address
              </h1>
              <h3 className={styles.info__description}>
                3424 Layman Avenue, Fayetteville, NC
              </h3>
            </div>
            <div className={styles.info__img_container}>
              <img src="images\images__contact\pin.svg" alt="pin" />
            </div>
          </div>
          <div className={`${styles.info__item} ${styles.info__item2}`}>
            <div className={styles.info__item_text}>
              <h1 className={styles.info__title}>
                Phone
              </h1>
              <h3 className={styles.info__description}>
                (501) 414-1541
              </h3>
            </div>
            <div className={styles.info__img_container}>
              <img src="images\images__contact\phone.svg" alt="phone" />
            </div>
          </div>
          <div className={`${styles.info__item} ${styles.info__item3}`}>
            <div className={styles.info__item_text}>
              <h1 className={styles.info__title}>
                E-Mail
              </h1>
              <h3 className={styles.info__description}>
                devchapter@gmail.com
              </h3>
            </div>
            <div className={styles.info__img_container}>
              <img src="images\images__contact\mail.svg" alt="pin" />
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Contact