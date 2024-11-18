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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl text-gray-700">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 font-bold">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-dark-red text-light-yellow">
      <Header />
      <div className="pt-20 pb-8">
        {categories.map(({ key, title }) => (
          <Carousel
            key={key}
            title={title}
            movies={moviesByCategory[key] || []}
            category={key}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
