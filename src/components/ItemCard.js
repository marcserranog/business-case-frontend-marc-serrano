// src/components/ItemCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="item-card" onClick={goToDetailPage}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default ItemCard;
