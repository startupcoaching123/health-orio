import React from 'react';
// Import the image from your assets folder
import logoImage from '../assets/OrioLogo.png'; 

const OrioLogo = ({ className }) => {
  return (
    <img 
      src={logoImage} 
      alt="Orio Labs Logo" 
      className={`object-contain ${className}`} 
    />
  );
};

export default OrioLogo;