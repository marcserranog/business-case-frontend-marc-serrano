import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';  // Usa BrowserRouter
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
