import React from 'react';
// Import both logos from your assets folder
import logoImage from '../assets/logo5.png'; 
import logo2Image from '../assets/logo4.png'; 

const OrioLogo = ({ theme, className }) => {
  // Use logo2 when theme is dark, otherwise use the original logo
  const logoSrc = theme === 'dark' ? logo2Image : logoImage;
  
  return (
    <img 
      src={logoSrc} 
      alt="Health Orio Logo" 
      className={`object-contain ${className}`} 
    />
  );
};

export default OrioLogo;