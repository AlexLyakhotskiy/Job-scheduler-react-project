import React, { useState } from 'react';

import Svg from '../../Svg/Svg';
import Container from '../../Container/Container';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ children }) => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleModal = () => setBurgerMenuOpen(prev => !prev);

  const onCloseBurger = () => {
    toggleModal();
  };

  const childs = React.Children.map(children, c => {
    if (React.isValidElement(c))
      return React.cloneElement(c, { onCloseBurger });
  });

  return (
    <>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        <Svg
          icon={isBurgerMenuOpen ? '#icon-polygonDown' : '#icon-polygon'}
          className={styles.icon}
        />
      </button>
      {isBurgerMenuOpen && (
        <div className={styles.menu}>
          <Container className={styles.container}>{childs}</Container>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
