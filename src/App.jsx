import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#06070B] text-white selection:bg-cyan-500/40 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/50">
        © {new Date().getFullYear()} Nova Edit Studio — Crafted with motion and precision.
      </footer>
    </div>
  );
}

export default App;
