// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import WishlistPage from './pages/WishListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
