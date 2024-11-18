import React, { useEffect } from 'react';

const Alert = ({ message, onClose, color }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`alert fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg text-white ${color} transition-all opacity-0 animate-fadeIn`}
      style={{ animationDuration: '0.5s' }}
    >
      <span>{message}</span>
    </div>
  );
};

export default Alert;
