import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import { resetUser } from '../redux/auth/auth-operations';
import { getIsResetingUser } from '../redux/auth/auth-selectors';

function App() {
  const history = useHistory();
  const isResetingUser = useSelector(getIsResetingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const emptyPath = history.location.pathname === '/';
    emptyPath && history.replace('/register');
    dispatch(resetUser());
  }, [history, dispatch]);

  return (
    !isResetingUser && (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  );
}

export default App;
