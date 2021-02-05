import React from 'react';
import styles from './User.module.scss';

const User = ({ user }) => {
  return (
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
  )
}

export default User;

