import React, { useEffect, useState } from 'react';

const Alert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const fadeOutTimeout = setTimeout(() => setVisible(false), 1500);
      const closeTimeout = setTimeout(() => onClose(), 2000);

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(closeTimeout);
      };
    }
  }, [message, onClose]);

  return visible ? (
    <div
      className="alert fixed top-8 left-1/2 transform -translate-x-1/2 bg-bright-red text-white px-6 py-3 rounded-lg shadow-lg opacity-100 transition-opacity duration-500 z-50"
    >
      <p>{message}</p>
    </div>
  ) : null;
};

export default Alert;
