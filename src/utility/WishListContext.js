import React, { createContext, useState } from 'react';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
