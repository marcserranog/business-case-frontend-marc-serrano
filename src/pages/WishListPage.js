// src/pages/WishlistPage.js
import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div>
        <h1>Your Wishlist</h1>
        <p>No movies added to the wishlist yet!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Wishlist</h1>
      <div className="wishlist-cards">
        {wishlist.map((movie, index) => (
          <div key={index} className="wishlist-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
