import React from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-white">CALY</span>
          <span className="text-cyan-glow text-shadow-[0_0_10px_rgba(0,240,255,0.4)]">VIRT</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
          <a href="#workflow" className="hover:text-white transition-colors duration-200">Our Process</a>
          <a href="#roi" className="hover:text-white transition-colors duration-200">ROI Calculator</a>
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border border-cyan-glow/50 text-cyan-glow px-6 py-2.5 rounded-full font-medium transition-colors hover:bg-cyan-glow/10"
        >
          Book a Consultation
        </motion.button>
      </div>
    </header>
  );
};

export default NavBar;
