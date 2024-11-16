import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  // Extraemos la categoría de la película
  const category = location.state?.category;

  return (
    <div className={`movie-detail-page ${category}`}>
      <div className="movie-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592;
        </button>
        <h1>{movie.title}</h1>
      </div>

      <div className="movie-content">
        <div className="movie-left">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-right">
          <button className="wishlist-button">Add to Wishlist</button>
          <p className="movie-description">{movie.overview}</p>
        </div>
      </div>

      <div className="movie-additional-info">
        <h3>Additional Information</h3>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;