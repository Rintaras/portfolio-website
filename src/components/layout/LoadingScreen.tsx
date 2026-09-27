import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-2xl md:text-4xl font-bold mb-8">
              <span className="text-foreground">YOUR</span>
              <span className="text-primary-500">NAME</span>
            </div>

            <div className="w-64 h-1 bg-foreground/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-primary-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="text-foreground/60">
              {Math.round(progress)}% Loading...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};