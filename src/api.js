
const API_KEY = process.env.REACT_APP_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching movies by category:', error);
    return []; 
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; 
  }
};
