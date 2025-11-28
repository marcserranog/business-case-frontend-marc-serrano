import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { WishlistProvider } from './context/WishlistContext';
import './styles/tailwind.css';

ReactDOM.render(
  <WishlistProvider>
    <Router>  
      <App />
    </Router>
  </WishlistProvider>,
  document.getElementById('root')
);
