import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.stats}>
        <p className={styles.stats__number}>80K</p>
        <p className={styles.stats__text}>Followers</p>
      </div>
      <div className={styles.stats}>
        <p className={styles.stats__number}>803K</p>
        <p className={styles.stats__text}>Likes</p>
      </div>
      <div className={styles.stats}>
        <p className={styles.stats__number}>1.4K</p>
        <p className={styles.stats__text}>Photos</p>
      </div>
    </div>
  </>
)
export default Stats;