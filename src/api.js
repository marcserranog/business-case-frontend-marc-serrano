// src/api.js

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Asegúrate de tener la API key cargada desde .env
const BASE_URL = 'https://api.themoviedb.org/3';

// Función para obtener películas por categoría
export const fetchMoviesByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results; // Devuelve solo la lista de películas
  } catch (error) {
    console.error('Error fetching movies by category:', error);
    return []; // En caso de error, retornamos un arreglo vacío
  }
};

// Función para obtener los detalles de una película específica
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data; // Retorna toda la información de la película
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; // En caso de error, retornamos null
  }
};
