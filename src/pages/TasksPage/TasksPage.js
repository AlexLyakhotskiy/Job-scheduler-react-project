import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default function TasksPage() {
  const { sprintId } = useParams();
  const location = useLocation();

  console.log('sprintId: ', sprintId);
  return (
    <>
      <h1>TasksPage</h1>
      <div>
        <Link to={location.state?.from ?? routes.projects}>назад</Link>
      </div>
    </>
  );
}
