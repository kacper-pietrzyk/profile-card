import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';

import User from '../User/User';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const url = 'https://next.json-generator.com/api/json/get/EJaOYVFx9';
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => setUsers(result.results))
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  const drawIndex = () => {
    const newIndex = Math.floor(Math.random() * users.length);
    setIndex(newIndex);
  }

  const currentUser = users[index];

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <FontAwesomeIcon icon={faSyncAlt} className={styles.card__button} onClick={drawIndex} />
      </div>
      {users.length !== 0 &&
        <User
          user={currentUser}
        />}
    </div >
  )
}
export default Card;