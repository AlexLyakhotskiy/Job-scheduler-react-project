import React from 'react';
import { Link, useLocation, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default function SprintsPage() {
  const { projectId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();

  console.log('projectId: ', projectId);
  return (
    <>
      <h1>SprintsPage</h1>
      <Link
        to={{
          pathname: `${url}/sprints/555`,
          state: { from: location },
        }}
      >
        к таскам
      </Link>
      <div>
        <Link to={routes.projects}>назад</Link>
      </div>
    </>
  );
}
