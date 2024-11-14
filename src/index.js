import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import { WishListProvider } from './utility/WishListContext';



ReactDOM.render(
  <WishListProvider>
    <App />
  </WishListProvider>,
  document.getElementById('root')
);
