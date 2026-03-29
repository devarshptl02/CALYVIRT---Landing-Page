import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import CanvasParticles from './CanvasParticles';

const HeroSection: React.FC = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Smooth mouse coordinates for Framer Motion cursor
  const cursorX = useSpring(-1000, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-1000, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleScroll = () => {
      setIsOrdered(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      <CanvasParticles isOrdered={isOrdered} mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Magnetic Cursor Visual */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-glow/60 pointer-events-none z-50 shadow-[0_0_15px_rgba(0,240,255,0.5)] bg-cyan-glow/10 backdrop-blur-sm mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isOrdered ? 0 : 1, // Hide cursor glow when ordered
          opacity: isOrdered ? 0 : 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          We Turn Business <span className="text-slate-500 line-through decoration-cyan-glow decoration-4">Chaos</span><br/>
          Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-500">Automated Growth.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10"
        >
          CALYVIRT builds bespoke AI systems that scale your operations flawlessly.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <p className="text-sm tracking-widest uppercase text-slate-500 flex items-center gap-4 animate-pulse">
            <span className="w-12 h-[1px] bg-slate-500"></span>
            Scroll Down
            <span className="w-12 h-[1px] bg-slate-500"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
