import React from 'react';
import ItemCard from './ItemCard';

const Carousel = ({ title, movies, category }) => {
  return (
    <div className="carousel">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-items">
        {movies.map((movie) => (
          <ItemCard key={movie.id} movie={movie} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
