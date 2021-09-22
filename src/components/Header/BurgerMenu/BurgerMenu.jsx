import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Svg from '../../Svg/Svg';

import { logout } from '../../../redux/auth/auth-operations';
import { getIsLoggedIn, getUser } from '../../../redux/auth/auth-selectors';

import styles from './BurgerMenu.module.scss';
import ChangerTheme from '../ChangerTheme/ChangerTheme';
import SelectLang from '../SelectLang/SelectLang';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const toggleModal = () => setBurgerMenuOpen(prev => !prev);
  const handleLogOut = () => {
    dispatch(logout());
    toggleModal();
  };

  return (
    <>
      <button className={styles.menu__btn} onClick={toggleModal}>
        <span></span>
        {/* <Svg icon="#icon-add" className={styles.icon} /> */}
      </button>
      {isBurgerMenuOpen && (
        <ul className={styles.userContainer}>
          {isLoggedIn && (
            <>
              <li>
                <p className={styles.text}>
                  {email.slice(0, email.indexOf('@'))}
                </p>
              </li>
              <li>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={handleLogOut}
                >
                  <Svg icon="#icon-exit" className={styles.icon} />
                  <span className={styles.btnText}>Log Out</span>
                </button>
              </li>
            </>
          )}

          <li>
            <ChangerTheme />
          </li>
          <li>
            <SelectLang />
          </li>
        </ul>
      )}
    </>
  );
};

export default BurgerMenu;
