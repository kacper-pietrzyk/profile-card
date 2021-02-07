import React from 'react';
import styles from './Stats.module.scss';

const Stats = props => {
  const { followers, likes, photos } = props.user.stats;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.stats}>
          <p className={styles.stats__number}>{followers}</p>
          <p className={styles.stats__text}>Followers</p>
        </div>
        <div className={styles.stats}>
          <p className={styles.stats__number}>{likes}</p>
          <p className={styles.stats__text}>Likes</p>
        </div>
        <div className={styles.stats}>
          <p className={styles.stats__number}>{photos}</p>
          <p className={styles.stats__text}>Photos</p>
        </div>
      </div>
    </>
  )
}
export default Stats;