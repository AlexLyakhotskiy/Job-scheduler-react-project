import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import sprintOperations from '../../redux/sprint/sprin-operations';

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
