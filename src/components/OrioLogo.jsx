import React from 'react';
import logoImage from '../assets/logo4.png'; 

const OrioLogo = ({ theme, className }) => {
  const filterStyle = theme === 'light' ? { filter: 'invert(1) hue-rotate(180deg)' } : {};
  return (
    <img 
      src={logoImage} 
      alt="Health Orio Logo" 
      className={`object-contain ${className}`}
      style={filterStyle}
    />
  );
};

export default OrioLogo;