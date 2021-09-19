import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TasksList from '../../components/Tasks/TasksList';
import { routes } from '../../routes/routes';

export default function TasksPage() {
  const { sprintId, projectId } = useParams();

  console.log('sprintId: ', sprintId);
  return (
    <>
      <div>
        <Link to={`${routes.projects}/${projectId}/sprints`}>назад</Link>
        <TasksList />
      </div>
    </>
  );
}
