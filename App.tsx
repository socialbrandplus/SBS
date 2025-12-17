import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollTop;
      const winScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total / winScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const outline = document.querySelector('.cursor-outline') as HTMLElement;
    
    const moveCursor = (e: MouseEvent) => {
      if(dot && outline) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        outline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <LanguageProvider>
      {/* Global Space Backgrounds */}
      <div className="fixed inset-0 bg-[#030014] z-[-10]"></div>
      <div className="stars layer-1"></div>
      <div className="stars layer-2"></div>
      
      {/* Custom Cursor */}
      <div className="cursor-dot hidden md:block"></div>
      <div className="cursor-outline hidden md:block"></div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink z-[100]" style={{ width: `${scrollProgress * 100}%` }}></div>

      <div className="min-h-screen text-white font-sans selection:bg-neon-cyan selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <AIConsultant />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;