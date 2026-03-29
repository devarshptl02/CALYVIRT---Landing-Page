import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import WorkflowVisualizer from './components/WorkflowVisualizer';
import ROICalculator from './components/ROICalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-midnight min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white">
      <NavBar />
      <main>
        <HeroSection />
        <WorkflowVisualizer />
        <ROICalculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
