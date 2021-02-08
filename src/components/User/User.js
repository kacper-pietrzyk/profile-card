import React from 'react';
import styles from './User.module.scss';

import Stats from '../Stats/Stats';

const User = ({ user }) => {
  return (
    <main className={styles.card__main}>
      <div className={styles.card__imageWrapper}>
        <img
          className={styles.card__image}
          src={user.picture}
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
          {user.city}, {user.country}</p>
      </div>
      <Stats user={user} />
    </main>
  )
}

export default User;

