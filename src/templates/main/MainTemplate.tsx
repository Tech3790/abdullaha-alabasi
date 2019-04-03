import * as React from 'react';

// components
import { Header } from '../../components/header/Header';

// styles
import * as styles from './MainTemplate.sass';

interface IProps {
  className?: string;
}

export const MainTemplate: React.SFC<IProps> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div>{children}</div>
  </div>
);
