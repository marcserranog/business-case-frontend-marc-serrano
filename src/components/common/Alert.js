import React, { useEffect, useState } from 'react';

const Alert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setFadeOut(false);  

      setTimeout(() => {
        setFadeOut(true);
      }, 1500);

      setTimeout(() => {
        setVisible(false);
        onClose(); 
      }, 2000);
    }
  }, [message, onClose]); 

  return (
    visible && (
      <div
        className={`alert fixed top-0 left-1/2 transform -translate-x-1/2 mt-8 bg-bright-red text-white px-6 py-3 rounded-lg shadow-lg opacity-100 transition-all duration-500 ease-out ${
          fadeOut ? 'translate-y-[-100px] opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ zIndex: 9999 }} 
      >
        <p>{message}</p>
      </div>
    )
  );
};

export default Alert;
