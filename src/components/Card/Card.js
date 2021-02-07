import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';

import User from '../User/User';

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://next.json-generator.com/api/json/get/EkDkYXnJc';
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => setUsers(result.results))
      .catch(err => console.log(`Error: ${err}`));
    console.log('wywołany useeffect')
  }, []);

  const index = Math.floor(Math.random() * users.length);
  const currentUser = users[index];

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__top}></div>

        {users.length !== 0 &&
          <User
            user={currentUser}
          />}

      </div >
    </>
  )
}
export default Card;