import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import OrioNavbar from './components/OrioNavbar';
import HeroSection from './components/Hero';
import WhyVBHC from './Sections/WhyVBHC';
import TheProblem from './Sections/TheProblem';
import TheSolution from './Sections/TheSolution';
import WhoWeWorkWith from './Sections/WhoWeWorkWith';
import CallToAction from './Sections/CallToAction';
import Footer from './components/Footer';
import VBHCPage from './pages/VBHCPage';
import WhatWeSolvePage from './pages/WhatWeSolvePage';
import PlatformPage from './pages/PlatformPage';
import IPUSolutionsPage from './pages/IPUPage';
import ROISection from './Sections/ROISection';
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
      <div className={`w-full min-h-screen overflow-x-hidden transition-colors duration-700`}>
        
        {/* Navbar: Controls the theme */}
        <OrioNavbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <SEO
                title="HealthOrio | Value-Based Healthcare Platform for Hospitals in India"
                description="HealthOrio helps 50–100 bed hospitals adopt Value-Based Healthcare through data integration, IPU enablement, and advanced analytics. Improve clinical outcomes and EBITDA."
                canonical="/"
              />
              <HeroSection theme={theme} />
              <WhyVBHC theme={theme} />
              <TheProblem theme={theme} />
              <TheSolution theme={theme} />
              <ROISection theme={theme} />
              <WhoWeWorkWith theme={theme} />
              <CallToAction theme={theme} />
            </>
          } />

          <Route path="/vbhc" element={
            <>
              <SEO
                title="Value-Based Healthcare (VBHC) for Hospitals | HealthOrio"
                description="Understand how Value-Based Healthcare transforms hospital operations. HealthOrio enables IPU-based care delivery that improves outcomes while reducing costs."
                canonical="/vbhc"
              />
              <VBHCPage theme={theme} />
            </>
          } />
          <Route path="/what-we-solve" element={
            <>
              <SEO
                title="Hospital Data & Operational Challenges We Solve | HealthOrio"
                description="Stop fixing symptoms. HealthOrio addresses fragmented hospital data, operational inefficiencies, and financial leakage at the root cause."
                canonical="/what-we-solve"
              />
              <WhatWeSolvePage theme={theme} />
            </>
          } />
          <Route path="/platform" element={
            <>
              <SEO
                title="Healthcare Data Integration Platform | HealthOrio Bridge & Insights"
                description="HealthOrio Bridge and Insights integrate seamlessly with your existing HIS, EMR, LIS, RIS, and billing systems to enable Value-Based Care without disruption."
                canonical="/platform"
              />
              <PlatformPage theme={theme} />
            </>
          } />
          <Route path="/ipu-solutions" element={
            <>
              <SEO
                title="Integrated Practice Unit (IPU) Solutions for Hospitals | HealthOrio"
                description="HealthOrio's IPU enablement helps hospitals organise multidisciplinary care teams around medical conditions, improving outcomes and reducing costs."
                canonical="/ipu-solutions"
              />
              <IPUSolutionsPage theme={theme} />
            </>
          } />
          <Route path="/roi" element={
            <>
              <SEO
                title="ROI of Value-Based Healthcare Implementation | HealthOrio"
                description="Calculate the return on investment of implementing Value-Based Healthcare. HealthOrio helps hospitals increase EBITDA and eliminate financial leakage."
                canonical="/roi"
              />
              <ROIPage theme={theme} />
            </>
          } />
          <Route path="/case-studies" element={
            <>
              <SEO
                title="Healthcare Case Studies | HealthOrio"
                description="See how hospitals have transformed their outcomes, costs, and margins with HealthOrio's Value-Based Healthcare platform."
                canonical="/case-studies"
              />
              <CaseStudiesPage theme={theme} />
            </>
          } />
          <Route path="/solutions-by-role" element={
            <>
              <SEO
                title="Healthcare Solutions by Role | HealthOrio"
                description="HealthOrio provides tailored solutions for hospital administrators, clinicians, and health economists to enable Value-Based Care across all departments."
                canonical="/solutions-by-role"
              />
              <SolutionsByRole theme={theme} />
            </>
          } />
          <Route path="/resources" element={
            <>
              <SEO
                title="Value-Based Healthcare Resources & Playbooks | HealthOrio"
                description="Access VBHC implementation playbooks, IPU setup guides, KPI benchmarks, and hospital readiness checklists."
                canonical="/resources"
              />
              <ResourcesPage theme={theme} />
            </>
          } />
          <Route path="/about-us" element={
            <>
              <SEO
                title="About HealthOrio | Value-Based Care Technology Company"
                description="HealthOrio is on a mission to enable hospitals to deliver Better Outcomes at Lower Costs through data-driven Value-Based Care models."
                canonical="/about-us"
              />
              <AboutUsPage theme={theme} />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SEO
                title="VBHC Readiness Assessment | Contact HealthOrio"
                description="Start your Value-Based Healthcare journey with a free VBHC Readiness Assessment. Book a call with the HealthOrio team today."
                canonical="/contact"
              />
              <ContactAssessment theme={theme} />
            </>
          } />
        </Routes>

        {/* Global Footer - Shows on all pages */}
        <Footer theme={theme} />

      </div>
    </Router>
  );
};

export default App;