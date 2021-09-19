import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default function TasksPage() {
  const { sprintId, projectId } = useParams();

  console.log('sprintId: ', sprintId);
  return (
    <>
      <h1>TasksPage</h1>
      <div>
        <Link to={`${routes.projects}/${projectId}/sprints`}>назад</Link>
      </div>
    </>
  );
}
