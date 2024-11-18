import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ movie, category }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/movie/${movie.id}`, { state: { movie, category } });
  };

  return (
    <div
      className="group relative w-48 md:w-64 h-72 md:h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform group-hover:scale-110 cursor-pointer"
      onClick={goToDetailPage}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-white text-lg md:text-xl font-bold text-center px-4">
          {movie.title}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
