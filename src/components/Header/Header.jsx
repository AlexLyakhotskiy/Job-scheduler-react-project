import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './Header.module.scss';
import SelectLang from './SelectLang/SelectLang';

import ChangerTheme from './ChangerTheme/ChangerTheme.jsx';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <div>
          <SelectLang />
          <ChangerTheme />
          {isLoggedIn && <UserMenu />}
        </div>
      </Container>
    </header>
  );
}
