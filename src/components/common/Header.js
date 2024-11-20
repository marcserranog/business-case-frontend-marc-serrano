import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';

const Header = () => {
  const { wishlist } = useWishlist();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
      setIsHidden(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-dark-blue to-crimson-red text-white shadow-lg transition-transform duration-300 z-50 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${isShrunk ? 'py-2' : 'py-4'}`}
    >
      <div className="w-full flex justify-between items-center px-6">
        <Link
          to="/"
          className="text-3xl font-title tracking-wider text-light-yellow hover:text-bright-yellow transition"
        >
          Fakeflix
        </Link>
        <nav>
          <Link
            to="/wishlist"
            className="relative flex items-center justify-center w-12 h-12 text-golden-orange rounded-full hover:scale-110 transition transform"
          >
            <FaHeart className="w-6 h-6 text-golden-orange" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center ring-1 ring-orange animate-pulse">
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
