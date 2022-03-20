import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/authContext';
import RestaurantsProvider from './context/restaurantsContext';

ReactDOM.render(
  <AuthProvider>
    <RestaurantsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RestaurantsProvider>
  </AuthProvider>,
  document.getElementById('root')
);
