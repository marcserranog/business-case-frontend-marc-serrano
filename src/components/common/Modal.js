import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 

const Modal = ({ message, onClose, show }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (show) {
      setFade(true);
      const timer = setTimeout(() => {
        onClose(); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-md"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-center mb-4">
          {message.includes("added") ? (
            <FaCheckCircle className="text-green-500 text-6xl" />
          ) : (
            <FaTimesCircle className="text-red-500 text-6xl" />
          )}
        </div>
        <h2 className="text-lg font-bold text-center mb-4">{message}</h2>
        <div className="text-center">
          <button
            className="bg-light-yellow text-dark-blue px-6 py-2 rounded-full hover:bg-bright-yellow transition-all"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
