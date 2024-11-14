// src/api.js

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log(API_KEY);
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
