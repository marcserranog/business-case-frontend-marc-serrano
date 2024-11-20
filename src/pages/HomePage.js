import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { fetchMoviesByCategory } from '../api/api';
import Header from '../components/common/Header';

const categories = [
  { key: 'popular', title: 'Popular Movies' },
  { key: 'top_rated', title: 'Top Rated Movies' },
  { key: 'upcoming', title: 'Upcoming Movies' },
];

const HomePage = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await Promise.all(
          categories.map(async ({ key }) => ({
            key,
            movies: await fetchMoviesByCategory(key),
          }))
        );
        setMoviesByCategory(
          moviesData.reduce((acc, { key, movies }) => ({ ...acc, [key]: movies }), {})
        );
      } catch {
        setError('Failed to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="loading-screen">Loading...</div>;
    }
    if (error) {
      return <div className="error-screen">{error}</div>;
    }
    return categories.map(({ key, title }) => (
      <Carousel key={key} title={title} movies={moviesByCategory[key] || []} category={key} />
    ));
  };

  return (
    <div className="home-page min-h-screen bg-dark-red text-light-yellow">
      <Header />
      <div className="content pt-20 pb-8">{renderContent()}</div>
    </div>
  );
};

export default HomePage;
