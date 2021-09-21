import React, { Component } from 'react';
//import { useSelector } from 'react-redux';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

//import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './Header.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow);
  }

  render() {
    //const isLoggedIn = useSelector(getIsLoggedIn);
    const { width, breakPoint } = this.state;
    return (
      <header className={styles.header}>
        <Container className={styles.container}>
          <Logo />
          {width < breakPoint ? <BurgerMenu /> : <UserMenu />}
        </Container>
      </header>
    );
  }
}
