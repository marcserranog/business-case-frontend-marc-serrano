import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ movie, category, isCarousel }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform cursor-pointer ${
        isCarousel ? 'w-64 h-80' : 'w-full h-auto'
      }`}
      onClick={() => navigate(`/movie/${movie.id}`, { state: { movie, category } })}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="text-white text-lg font-bold px-4">{movie.title}</span>
      </div>
    </div>
  );
};

export default ItemCard;
