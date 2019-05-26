import * as React from 'react';

// settings
import { settings } from '../../settings';

// styles
import * as styles from './Header.sass';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <h1>{settings.title}</h1>
  </header>
)