import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';

const WishlistItemCard = ({ movie, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:z-10 relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-t-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity">
        <span className="text-white text-lg font-bold mb-4">{movie.title}</span>
        <div className="flex space-x-4">
          <button
            className="text-light-yellow text-3xl hover:text-bright-yellow"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <FaInfoCircle />
          </button>
          <button
            className="text-bright-red text-3xl hover:text-dark-red"
            onClick={() => onRemove(movie.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItemCard;
