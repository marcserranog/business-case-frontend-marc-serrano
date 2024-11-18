import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import { useWishlist } from '../context/WishlistContext';
import Alert from '../components/common/Alert';
import Header from '../components/common/Header';

const categoryColors = {
  popular: 'bg-bright-red text-white border-2 border-white hover:bg-dark-red hover:text-white',
  top_rated: 'bg-dark-red text-light-yellow border-2 border-light-yellow hover:bg-light-yellow hover:text-dark-red',
  upcoming: 'bg-crimson-red text-white border-2 border-crimson-red hover:bg-bright-orange hover:text-dark-blue',
};

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState('bg-red');

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
    if (category) {
      setAlertColor(categoryColors[category]);
    }
  }, [location.state?.category]);

  if (!movie) return <div>Loading...</div>;

  const handleAddToWishlist = () => {
    addToWishlist(movie);
    setShowAlert(true);
  };

  const category = location.state?.category || 'popular';

  return (
    <div className="movie-detail-page bg-dark-blue min-h-screen py-6 px-8">
      <Header />
      <div className="movie-header sticky top-0 z-10 flex items-center justify-between pb-6 border-b-2 border-light-yellow mt-24 bg-dark-blue">
        <button
          className="back-button bg-light-yellow text-dark-blue font-bold px-4 py-2 rounded-full transform transition-all hover:bg-bright-yellow hover:scale-110"
          onClick={() => navigate(-1)}
        >
          &#8592; Back
        </button>
        <h1 className="movie-title text-4xl font-title text-white ml-4">{movie.title}</h1>
      </div>

      {showAlert && <Alert message="Movie has been added to your wishlist" onClose={() => setShowAlert(false)} color={alertColor} />}

      <div className="movie-content flex justify-between items-start mt-16">
        <div className="movie-left flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster rounded-lg shadow-lg transform transition-all hover:scale-105 w-80"
          />
        </div>
        <div className="movie-right pl-8 flex-1">
          <button
            className={`wishlist-button px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${categoryColors[category]}`}
            onClick={handleAddToWishlist}
          >
            Add to Wishlist
          </button>

          <p className={`movie-description mt-4 text-lg ${category === 'top_rated' ? 'font-edu' : category === 'upcoming' ? 'font-space' : 'font-body'} text-white`}>
            {movie.overview}
          </p>
        </div>
      </div>

      <div className="movie-additional-info mt-12">
        <h3 className="text-2xl font-bold text-light-yellow">Additional Information</h3>
        <p className={`text-lg ${category === 'top_rated' ? 'font-edu' : category === 'upcoming' ? 'font-space' : 'font-body'} text-white mt-2`}>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className={`text-lg ${category === 'top_rated' ? 'font-edu' : category === 'upcoming' ? 'font-space' : 'font-body'} text-white`}>
          <strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
