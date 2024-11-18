import React from 'react';
import ItemCard from './ItemCard';

const Carousel = ({ title, movies, category }) => {
  return (
    <div className="w-full px-6 py-8">
      <h2 className="text-3xl font-title text-light-yellow mb-4 border-light-yellow inline-block">
        {title}
      </h2>

      <div className="flex space-x-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-dark-red scrollbar-track-light-yellow snap-x snap-mandatory">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="snap-center flex-shrink-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <ItemCard movie={movie} category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
