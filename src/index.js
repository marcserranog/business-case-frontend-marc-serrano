import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WishlistProvider } from './context/WishlistContext';
import './styles/tailwind.css';


ReactDOM.render(
  <WishlistProvider>
    <App />
  </WishlistProvider>,
  document.getElementById('root')
);
