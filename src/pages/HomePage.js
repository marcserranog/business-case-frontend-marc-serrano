import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { fetchMoviesByCategory } from '../api';
import { FaHeart } from 'react-icons/fa';

const categories = [
  { key: 'popular', title: 'Popular Movies' },
  { key: 'top_rated', title: 'Top Rated Movies' },
  { key: 'upcoming', title: 'Upcoming Movies' },
];

const HomePage = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = {};
        for (const category of categories) {
          const movies = await fetchMoviesByCategory(category.key);
          moviesData[category.key] = movies;
        }
        setMoviesByCategory(moviesData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovies();

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistCount(wishlist.length);
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-title">🎬 Movie Web 🎬</h1>

        <div className="wishlist-container">
          <button 
            className="wishlist-icon"
            onClick={() => window.location.href = '/wishlist'}
          >
            <FaHeart />
            <span className="wishlist-count">{wishlistCount}</span>
          </button>
        </div>
      </header>

      {categories.map(({ key, title }) => (
        <Carousel key={key} title={title} movies={moviesByCategory[key] || []} category={key} />
      ))}
    </div>
  );
};

export default HomePage;
