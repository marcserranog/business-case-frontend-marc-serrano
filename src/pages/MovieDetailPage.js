import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { useWishlist } from '../context/WishlistContext';
import Alert from '../components/common/Alert';

const categoryColors = {
  popular: '#FF5733',
  top_rated: '#28a745',
  upcoming: '#007bff',
};

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState('#ff4d4d');  

  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const category = location.state?.category;
    if (category && categoryColors[category]) {
      setAlertColor(categoryColors[category]);
    }
  }, [location.state?.category]);  

  if (!movie) return <div>Loading...</div>;

  const handleAddToWishlist = () => {
    addToWishlist(movie);
    setShowAlert(true);  
  };

  return (
    <div className={`movie-detail-page ${location.state?.category}`}>
      <div className="movie-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592;
        </button>
        <h1>{movie.title}</h1>
      </div>

      {}
      {showAlert && <Alert message="Movie has been added to your wishlist" onClose={() => setShowAlert(false)} color={alertColor} />}

      <div className="movie-content">
        <div className="movie-left">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-right">
          <button className="wishlist-button" onClick={handleAddToWishlist}>
            Add to Wishlist
          </button>
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
