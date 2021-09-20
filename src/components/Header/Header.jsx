import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './Header.module.scss';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        {isLoggedIn && <UserMenu />}
      </Container>
    </header>
  );
}
