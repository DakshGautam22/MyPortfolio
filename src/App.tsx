import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIBring from './components/WhatIBring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import GithubActivity from './components/GithubActivity';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';
import BackgroundGlows from './components/BackgroundGlows';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-darkBg text-gray-200 selection:bg-indigo-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Aesthetic Background Glows */}
      <BackgroundGlows />

      {/* Main Layout Wrappers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Navbar />

        {/* Content Sections */}
        <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
          <Hero />
          <WhatIBring />
          <Skills />
          <Projects />
          <Leadership />
          <GithubActivity />
          <ResumeSection />
        </main>

        {/* Recruiter Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
