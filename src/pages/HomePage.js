import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { fetchMoviesByCategory } from '../api';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await fetchMoviesByCategory('popular');
      const topRated = await fetchMoviesByCategory('top_rated');
      const upcoming = await fetchMoviesByCategory('upcoming');

      setPopularMovies(popular);
      setTopRatedMovies(topRated);
      setUpcomingMovies(upcoming);
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      <h1>Movie App</h1>
      <Carousel title="Popular Movies" movies={popularMovies} />
      <Carousel title="Top Rated Movies" movies={topRatedMovies} />
      <Carousel title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default HomePage;
