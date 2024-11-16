import React, { useContext } from 'react';
import { WishListContext } from '../utility/WishListContext';

const WishListPage = () => {
  const { wishList } = useContext(WishListContext);

  return (
    <div className="wishlist-page">
      <h2>WishList</h2>
      {wishList.length === 0 ? (
        <p>No items in your WishList.</p>
      ) : (
        <ul>
          {wishList.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishListPage;
