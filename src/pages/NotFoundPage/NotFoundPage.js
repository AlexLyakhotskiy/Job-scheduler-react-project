import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import { routes } from '../../routes/routes';

export default function NotFoundPage() {
  return (
    <Container>
      <h1>404 Oops! Page not found</h1>
      <Link to={routes.projects}>
        врменное решение пока нету логина, сылка на проекты
      </Link>
    </Container>
  );
}
