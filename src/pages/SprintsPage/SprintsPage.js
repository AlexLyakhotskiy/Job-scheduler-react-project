import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import IconBtn from '../../components/IconBtn/IconBtn';
import { routes } from '../../routes/routes';

export default function SprintsPage() {
  const { projectId } = useParams();
  const { url } = useRouteMatch();

  console.log('projectId: ', projectId);
  return (
    <>
      <h1>SprintsPage</h1>
      <Link to={`${url}/555`}>к таскам</Link>
      <IconBtn icon="add" />
      <div>
        <Link to={routes.projects}>назад</Link>
      </div>
    </>
  );
}
