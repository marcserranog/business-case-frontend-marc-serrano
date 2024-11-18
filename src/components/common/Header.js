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
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-dark-blue to-crimson-red text-white shadow-lg transition-transform duration-300 z-50 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${isShrunk ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          className="text-3xl font-title tracking-wider text-light-yellow hover:text-bright-yellow transition"
        >
          Fakeflix
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/wishlist"
            className="relative flex items-center justify-center w-12 h-12 bg-white text-bright-red rounded-full hover:scale-110 transition transform shadow-lg"
          >
            <FaHeart className="w-6 h-6 text-bright-red" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
