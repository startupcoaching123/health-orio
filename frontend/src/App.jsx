import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import OrioNavbar from './components/OrioNavbar';
import HeroSection from './components/Hero';
import WhyVBHC from './Sections/WhyVBHC';
import TheProblem from './Sections/TheProblem';
import TheSolution from './Sections/TheSolution';
import MeasurableImpact from './Sections/MeasurableImpact';
import WhoWeWorkWith from './Sections/WhoWeWorkWith';
import CallToAction from './Sections/CallToAction';
import Footer from './components/Footer';
import VBHCPage from './pages/VBHCPage';
import WhatWeSolvePage from './pages/WhatWeSolvePage';
import PlatformPage from './pages/PlatformPage';
import IPUSolutionsPage from './pages/IPUPage';
import ROIPage from './pages/ROIPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SolutionsByRole from './pages/SolutionsByRole.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactAssessment from './pages/Contact.jsx';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  // 1. DEFINE STATE HERE (This fixes the ReferenceError)
  const [theme, setTheme] = useState('dark');

  // 2. Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`w-full min-h-screen transition-colors duration-700`}>
        
        {/* Navbar: Controls the theme */}
        <OrioNavbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              {/* Hero: Receives theme as a PROP */}
              <HeroSection theme={theme} />

              {/* Why Section: Receives theme as a PROP */}
              <WhyVBHC theme={theme} />
              <TheProblem theme={theme} />
              <TheSolution theme={theme} />
              <MeasurableImpact theme={theme} />
              <WhoWeWorkWith theme={theme} />
              <CallToAction theme={theme} />
            </>
          } />
          
          {/* VBHC Page Route */}
          <Route path="/vbhc" element={<VBHCPage theme={theme} />} />
          <Route path="/what-we-solve" element={<WhatWeSolvePage theme={theme} />} />
          <Route path="/platform" element={<PlatformPage theme={theme} />} />
          <Route path="/ipu-solutions" element={<IPUSolutionsPage theme={theme} />} />
          <Route path="/roi" element={<ROIPage theme={theme} />} />
          <Route path="/case-studies" element={<CaseStudiesPage theme={theme} />} />
          <Route path="/solutions-by-role" element={<SolutionsByRole theme={theme} />} />
          <Route path="/resources" element={<ResourcesPage theme={theme} />} />
          <Route path="/about-us" element={<AboutUsPage theme={theme} />} />
          <Route path="/contact" element={<ContactAssessment theme={theme} />} />
        </Routes>

        {/* Global Footer - Shows on all pages */}
        <Footer theme={theme} />

      </div>
    </Router>
  );
};

export default App;