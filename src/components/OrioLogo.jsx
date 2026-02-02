import React from 'react';
// Import both logos from your assets folder
import logoImage from '../assets/OrioLogo.png'; 
import logo2Image from '../assets/logo2.png'; 

const OrioLogo = ({ theme, className }) => {
  // Use logo2 when theme is dark, otherwise use the original logo
  const logoSrc = theme === 'dark' ? logo2Image : logoImage;
  
  return (
    <img 
      src={logoSrc} 
      alt="Orio Labs Logo" 
      className={`object-contain ${className}`} 
    />
  );
};

export default OrioLogo;