import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProjectsPage() {
  const { path } = useRouteMatch();

  return (
    <>
      <h1>ProjectsPage</h1>
      <Link to={`${path}/111/sprints`}>к спринтам</Link>
      {/* этот линк обернуть лишкой */}
      {/* <Link to={`${path}/${id}`}>к спринтам</Link> */}
    </>
  );
}
