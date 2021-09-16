import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Switch, useHistory } from 'react-router';

// import LoginPage from '../../pages/LoginPage';
// import RegisterPage from '../../pages/RegisterPage';
// import ProjectsPage from '../../pages/ProjectsPage';
// import SprintsPage from '../../pages/SprintsPage';
// import TasksPage from '../../pages/TasksPage';
// import NotFoundPage from '../../pages/NotFoundPage';

import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

import { routes } from '../../routes/routes';

const LoginPage = lazy(() =>
  import(
    '../../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    '../../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const ProjectsPage = lazy(() =>
  import(
    '../../pages/ProjectsPage/ProjectsPage' /* webpackChunkName: "projects-page" */
  ),
);
const SprintsPage = lazy(() =>
  import(
    '../../pages/SprintsPage/SprintsPage' /* webpackChunkName: "sprints-page" */
  ),
);
const TasksPage = lazy(() =>
  import(
    '../../pages/TasksPage/TasksPage' /* webpackChunkName: "tasks-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);

export default function Main() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/login');
  }, [history]);
  return (
    <main>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <PublicRoute
            path={routes.login}
            restricted
            redirectedTo={routes.projects}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectedTo={routes.projects}
          >
            <RegisterPage />
          </PublicRoute>

          <PrivateRoute
            path={routes.projects}
            redirectedTo={routes.register}
            exact
          >
            <ProjectsPage />
          </PrivateRoute>

          <PrivateRoute
            path={routes.sprints}
            redirectedTo={routes.register}
            exact
          >
            <SprintsPage />
          </PrivateRoute>

          <PrivateRoute path={routes.tasks} redirectedTo={routes.register}>
            <TasksPage />
          </PrivateRoute>

          <PublicRoute>
            <NotFoundPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </main>
  );
}
