import * as React from 'react';
import * as styles from './Intro.sass';
export const Intro: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hello, my name is Abdullah</h1>
    <div className={styles.descriptionContainer}>
      <p className={styles.description}>I'm a</p>
      <p className={styles.subDescription}>Full-Stack Software Engineer</p>
    </div>
    <div className={styles.frame}>
      <img className={styles.profilePicture} src="/assets/profile_picture.JPG" alt="" />
    </div>
  </div>
);
