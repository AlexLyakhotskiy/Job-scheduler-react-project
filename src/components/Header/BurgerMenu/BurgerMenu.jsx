import React, { useState } from 'react';
import Svg from '../../Svg/Svg';
import { logout } from '../../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleModal = () => setBurgerMenuOpen(prev => !prev);
  const handleLogOut = () => dispatch(logout());
  const email = useSelector(getUser);
  const dispatch = useDispatch();
  return (
    <>
      <button className={styles.menu__btn} onClick={toggleModal}>
        <span></span>
        {/* <Svg icon="#icon-add" className={styles.icon} /> */}
      </button>
      {isBurgerMenuOpen && (
        <ul closeModal={toggleModal} className={styles.userContainer}>
          <li>
            <p className={styles.text}>{email.slice(0, email.indexOf('@'))}</p>
          </li>
          <li>
            <button className={styles.btn} type="button" onClick={handleLogOut}>
              <Svg icon="#icon-exit" className={styles.icon} />
              <span className={styles.btnText}>Log Out</span>
            </button>
          </li>
          <li>
            <p>THEME</p>
          </li>
          <li>
            <p>LANG</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default BurgerMenu;
