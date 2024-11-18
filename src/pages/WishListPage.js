import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <Header />
        <header className="wishlist-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &#8592; Back
          </button>
          <h1 className="wishlist-title">Your Wishlist</h1>
        </header>
        <p className="wishlist-empty">Your wishlist is empty. Start adding some movies!</p>
        <Link to="/" className="back-to-home">
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <header className="wishlist-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592; Back
        </button>
        <h1 className="wishlist-title">Your Wishlist</h1>
      </header>
      <div className="wishlist-grid">
        {wishlist.map((movie) => (
          <div key={movie.id} className="item-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <div className="wishlist-card-buttons">
              <button
                className="details-button"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                View Details
              </button>
              <button
                className="remove-button"
                onClick={() => removeFromWishlist(movie.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
