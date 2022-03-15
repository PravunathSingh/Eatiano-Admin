import { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/utilities/ScrollToTop';
import Signin from './pages/Signin';
import { Auth } from './context/authContext';
import Navbar from './components/UI/Navbar';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import ForgotPassword from './pages/ForgotPassword';
import CheckOTP from './pages/CheckOTP';

const App = () => {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          {isLoggedIn && <Route path='/' element={<Dashboard />} />}
          {!isLoggedIn && <Route path='/signin' element={<Signin />} />}
          {!isLoggedIn && (
            <Route
              path='/'
              element={<Navigate replace={true} to='/signin' />}
            />
          )}
          {isLoggedIn && (
            <Route
              path='/signin'
              element={<Navigate replace={true} to='/' />}
            />
          )}

          <Route path='*' element={<Error404 />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/checkOTP' element={<CheckOTP />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;