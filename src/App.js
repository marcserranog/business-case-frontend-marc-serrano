import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import WishListPage from './pages/WishListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:itemId" element={<ItemDetailPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
