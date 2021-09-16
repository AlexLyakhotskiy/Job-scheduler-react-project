import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

// import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectedTo = '/',
  ...props
}) {
  const isLoggedIn = useSelector(() => true);

  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectedTo} />}
    </Route>
  );
}
