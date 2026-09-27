import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentScrollPos / scrollHeight).toFixed(2)));
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    // Initialize
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
};