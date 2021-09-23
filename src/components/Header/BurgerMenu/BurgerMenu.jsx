import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Svg from '../../Svg/Svg';

import { getIsLoggedIn, getUser } from '../../../redux/auth/auth-selectors';

import styles from './BurgerMenu.module.scss';
import ChangerTheme from '../ChangerTheme/ChangerTheme';
import SelectLang from '../SelectLang/SelectLang';

import Container from '../../Container/Container';

const BurgerMenu = ({children}) => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const toggleModal = () => setBurgerMenuOpen(prev => !prev);

  return (
    <>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        <Svg icon="#icon-heart" className={styles.icon}  />
      </button>
	  {isBurgerMenuOpen && <div className={styles.menu} >
		  <Container className={styles.container} >
	  {children}
		  </Container>
	  </div>}
    </>
  );
};

export default BurgerMenu;
