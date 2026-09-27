import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollIndicator: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 origin-left"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    />
  );
};