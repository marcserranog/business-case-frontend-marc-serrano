// src/components/Carousel.js

import React from 'react';
import ItemCard from './ItemCard';

const Carousel = ({ title, movies }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-items">
        {movies.map((movie) => (
          <ItemCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
