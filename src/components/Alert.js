import React, { useEffect } from 'react';

const Alert = ({ message, onClose, color }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 3000);

    return () => clearTimeout(timer);  
  }, [onClose]);

  return (
    <div className="alert" style={{ backgroundColor: color }}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
