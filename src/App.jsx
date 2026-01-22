import React, { useState } from 'react';
import OrioNavbar from './components/OrioNavbar';
import HeroSection from './components/Hero';
import WhyVBHC from './Sections/WhyVBHC';
import TheProblem from './Sections/TheProblem';
import TheSolution from './Sections/TheSolution';
import MeasurableImpact from './Sections/MeasurableImpact';
import WhoWeWorkWith from './Sections/WhoWeWorkWith';
import CallToAction from './Sections/CallToAction';
import Footer from './components/Footer';


const App = () => {
  // 1. DEFINE STATE HERE (This fixes the ReferenceError)
  const [theme, setTheme] = useState('light');

  // 2. Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`w-full min-h-screen transition-colors duration-700`}>
      
      {/* Navbar: Controls the theme */}
      <OrioNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero: Receives theme as a PROP */}
      <HeroSection theme={theme} />

      {/* Why Section: Receives theme as a PROP */}
      <WhyVBHC theme={theme} />
      <TheProblem theme={theme} />
      <TheSolution theme={theme} />
      <MeasurableImpact theme={theme} />
      <WhoWeWorkWith theme={theme} />
      <CallToAction theme={theme} />
      <Footer theme={theme} />
      

    </div>
  );
};

export default App;