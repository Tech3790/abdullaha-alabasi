import * as React from 'react';
import { Intro } from '../../components/intro/Intro';
// styles
import * as styles from './HomePage.sass';

export const HomePage: React.SFC = () => (
  <div className={styles.container}>
    <Intro />
  </div>
);
