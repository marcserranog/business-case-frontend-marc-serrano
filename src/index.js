import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WishlistProvider } from './context/WishlistContext';
import './styles/main.scss';


ReactDOM.render(
  <WishlistProvider>
    <App />
  </WishlistProvider>,
  document.getElementById('root')
);
