import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';

import User from '../User/User';
import Stats from '../Stats/Stats';

import userImage from '../../assets/images/image-victor.jpg';

const Card = () => {
  const [users, setUsers] = useState([]);
  // const [randomUser, setRandomUser] = useState([]);

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


  const index = Math.floor(Math.random() * (users.length + 1));
  const currentUser = users[index];

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__top}></div>
        <main className={styles.card__main}>
          <div className={styles.card__imageWrapper}>
            <img
              className={styles.card__image}
              src={userImage}
              alt="user" />
          </div>
          {users.length !== 0 &&
            <User
              user={currentUser}
            />}
          <Stats />
        </main>
      </div >
    </>
  )
}
export default Card;