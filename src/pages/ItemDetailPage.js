// src/pages/ItemDetailPage.js

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WishListContext } from '../utility/WishListContext';
import { fetchMovieDetails } from '../api';

const ItemDetailPage = () => {
  const { movieId } = useParams();
  const { addToWishList } = useContext(WishListContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    fetchDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="item-detail-page">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <button onClick={() => addToWishList(movie)}>Add to WishList</button>
    </div>
  );
};

export default ItemDetailPage;
