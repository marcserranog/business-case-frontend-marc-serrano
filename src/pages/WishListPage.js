import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import Header from '../components/common/Header';
import WishlistItemCard from '../components/WishlistItemCard';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page min-h-screen bg-dark-blue text-white flex flex-col items-center justify-center">
        <Header />
        <div className="mt-14">
          <div className="wishlist-content px-6 py-8 text-center">
            <h1 className="text-3xl font-body text-light-yellow mb-6">Your Wishlist</h1>
            <p className="text-lg text-light-yellow mb-4">
              Your wishlist is empty. Start adding some movies!
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-bright-red text-white py-2 px-6 rounded-lg hover:bg-light-yellow transition"
            >
              Browse Movies
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page min-h-screen bg-dark-blue text-white">
      <Header />
      <div className="mt-20">
        <div className="wishlist-content px-6 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-body text-light-yellow mb-6">Your Wishlist</h1>
          </div>
          <div className="wishlist-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((movie) => (
              <WishlistItemCard
                key={movie.id}
                movie={movie}
                onRemove={removeFromWishlist}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/')}
              className="bg-bright-red text-white py-2 px-6 rounded-lg hover:bg-light-yellow transition"
            >
              Browse Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
