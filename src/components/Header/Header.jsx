import React from 'react';

import Container from '../Container/Container';
import Logo from './Logo/Logo';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}
