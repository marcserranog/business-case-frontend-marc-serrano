import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { fetchMoviesByCategory } from '../api';
import { useWishlist } from '../context/WishlistContext';
import Header from '../components/common/Header'; 

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
      <Header />
      <div className="content">
        {categories.map(({ key, title }) => (
          <Carousel key={key} title={title} movies={moviesByCategory[key] || []} category={key} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
