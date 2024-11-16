import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import { fetchMoviesByCategory } from '../api';
import { useWishlist } from '../context/WishlistContext';
import { FaHeart } from 'react-icons/fa';

const categories = [
  { key: 'popular', title: 'Popular Movies' },
  { key: 'top_rated', title: 'Top Rated Movies' },
  { key: 'upcoming', title: 'Upcoming Movies' },
];

const HomePage = () => {
  const { wishlist } = useWishlist();
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-title">🎬 Movie Web 🎬</h1>
        <Link to="/wishlist" className="wishlist-container">
          <div className="wishlist-icon">
            <FaHeart />
            {wishlist.length > 0 && <div className="wishlist-count">{wishlist.length}</div>}
          </div>
        </Link>
      </header>
      {categories.map(({ key, title }) => (
        <Carousel key={key} title={title} movies={moviesByCategory[key] || []} category={key} />
      ))}
    </div>
  );
};

export default HomePage;
