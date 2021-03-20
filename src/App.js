import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const getIdToken = await user.getIdTokenResult();
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: getIdToken.token,
          },
        });
      }
    });
    return () => unSubscribe();
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/register/complete' exact component={RegisterComplete} />
      </Switch>
    </>
  );
};

export default App;
