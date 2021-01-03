import React from 'react';
import styles from './Card.module.scss';

import Stats from '../Stats/Stats';

const Card = () => (
  <React.StrictMode>
    <div className={styles.wrapper}>
      <div className={styles.top}></div>
      <main>
        <h1></h1>
        <p></p>
      </main>
      <Stats />
    </div>
    <div>
      <img src="" alt="" />
    </div>
  </React.StrictMode>
)
export default Card;