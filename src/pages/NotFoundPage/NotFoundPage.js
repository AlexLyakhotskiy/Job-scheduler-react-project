import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h1>404 Ой! Сторінка не знайдена</h1>
        <Link to={routes.register} className={styles.link}>
          Можливо ви загубились? натисніть щоб повернутись до сайту.
        </Link>
      </div>
    </Container>
  );
}
