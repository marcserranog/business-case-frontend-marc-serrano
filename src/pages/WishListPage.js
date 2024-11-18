import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import Header from '../components/common/Header';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page min-h-screen bg-dark-blue text-white">
        <Header />
        <header className="wishlist-header px-6 py-4 flex justify-between items-center border-b-2 border-light-yellow">
          <button className="back-button text-2xl font-bold text-light-yellow" onClick={() => navigate(-1)}>
            &#8592; Back
          </button>
          <h1 className="wishlist-title text-4xl font-title text-light-yellow">Your Wishlist</h1>
        </header>
        <div className="flex justify-center items-center flex-col py-10">
          <p className="text-lg text-light-yellow mb-4">Your wishlist is empty. Start adding some movies!</p>
          <Link to="/" className="bg-bright-red text-white py-2 px-4 rounded-lg hover:bg-light-yellow transition">
            Browse Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page min-h-screen bg-dark-blue text-white">
      <Header />
      <header className="wishlist-header px-6 py-4 flex justify-between items-center border-b-2 border-light-yellow">
        <button className="back-button text-2xl font-bold text-light-yellow" onClick={() => navigate(-1)}>
          &#8592; Back
        </button>
        <h1 className="wishlist-title text-4xl font-title text-light-yellow">Your Wishlist</h1>
      </header>
      <div className="wishlist-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {wishlist.map((movie) => (
          <div key={movie.id} className="item-card bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:z-10 relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-lg font-bold">{movie.title}</span>
            </div>
            <div className="wishlist-card-buttons flex justify-between p-4 bg-dark-blue bg-opacity-80 rounded-b-lg">
              <button
                className="details-button bg-bright-red text-white py-2 px-4 rounded-lg hover:bg-light-yellow transition"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                View Details
              </button>
              <button
                className="remove-button bg-dark-red text-white py-2 px-4 rounded-lg hover:bg-light-yellow transition"
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
