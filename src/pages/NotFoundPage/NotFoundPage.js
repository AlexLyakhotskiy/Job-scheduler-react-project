import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h1>404 Oops! Page not found</h1>
        <Link to={routes.projects} className={styles.link}>
          Врменное решение пока нету логина, ссылка на проекты
        </Link>
      </div>
    </Container>
  );
}
