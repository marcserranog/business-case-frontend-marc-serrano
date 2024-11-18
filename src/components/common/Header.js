import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';

const Header = () => {
  const { wishlist } = useWishlist();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isShrunk ? 'shrink' : ''} ${isHidden ? 'hidden' : ''}`}>
      <Link to="/" className="header-title">
        Netflixy
      </Link>
      <nav className="header-navigation">
        <Link to="/wishlist" className="wishlist-container">
          <div className="wishlist-icon">
            <FaHeart />
            {wishlist.length > 0 && <div className="wishlist-count">{wishlist.length}</div>}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
