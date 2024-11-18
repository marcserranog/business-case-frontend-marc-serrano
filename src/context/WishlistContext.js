import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    const isDuplicate = wishlist.some((item) => item.id === movie.id);
    if (isDuplicate) {
      return false;
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, movie]);
      return true;
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
