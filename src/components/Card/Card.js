import React from 'react';
import styles from './Card.module.scss';

import Stats from '../Stats/Stats';

import userImage from '../../assets/images/image-victor.jpg';

const Card = () => (
  <React.StrictMode>
    <div className={styles.card}>
      <div className={styles.card__top}></div>
      <main className={styles.card__main}>
        <div className={styles.card__imageWrapper}>
          <img className={styles.card__image} src={userImage} alt="user" />
        </div>
        <div className={styles.card__personal}>
          <h1 className={styles.card__personal_primary}>Victor Crest <span className={styles.card__personal_secondary}>26</span></h1>
          <p className={styles.card__personal_secondary}>London</p>
        </div>
        <Stats />
      </main>
    </div >
  </React.StrictMode >
)
export default Card;