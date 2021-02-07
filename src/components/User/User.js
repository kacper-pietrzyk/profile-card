import React from 'react';
import styles from './User.module.scss';

import Stats from '../Stats/Stats';

import userImage from '../../assets/images/image-victor.jpg';

const User = ({ user }) => {
  return (
    <main className={styles.card__main}>
      <div className={styles.card__imageWrapper}>
        <img
          className={styles.card__image}
          src={userImage}
          alt="user" />
      </div>
      <div className={styles.card__personal}>
        <h1
          className={styles.card__personal_primary}>
          {user.name.first} {user.name.last}
          <span
            className={styles.card__personal_secondary}>
            {user.age}
          </span>
        </h1>
        <p
          className={styles.card__personal_secondary}>
          {user.city}</p>
      </div>
      <Stats />
    </main>
  )
}

export default User;

