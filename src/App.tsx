import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollIndicator } from './components/ui/ScrollIndicator';
import { LoadingScreen } from './components/layout/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  // This effect simulates assets loading
  useEffect(() => {
    // You can add actual asset loading logic here
    // For demo purposes, we'll use a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <LoadingScreen onComplete={() => setLoading(false)} />
      
      {!loading && (
        <>
          <div className="noise" />
          <ScrollIndicator />
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          
          <Footer />
          <Toaster position="top-right" />
        </>
      )}
    </div>
  );
}

export default App;