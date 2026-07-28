import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { CursorTrail } from './components/ui/CursorTrail';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-lightBg-50 dark:bg-darkBg-900 text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans">
        <CursorTrail />
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>

        {/* Global Footer & Back To Top */}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
