import * as React from 'react';
import { Link } from 'react-scroll';

// styles
import * as styles from './Header.sass';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link to="" className={styles.navLink}>
        About me
      </Link>
      <Link to="" className={styles.navLink}>
        Skills
      </Link>
      <Link to="" className={styles.navLink}>
        Professional Experience
      </Link>
      <Link to="" className={styles.navLink}>
        Qualifications
      </Link>
      <Link to="" className={styles.navLink}>
        Recent projects
      </Link>
      <Link to="" className={styles.navLink}>
        Past projects
      </Link>
    </nav>
  </header>
);
