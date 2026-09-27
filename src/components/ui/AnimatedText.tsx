import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = false,
}) => {
  // Split text into words and characters
  const words = text.split(' ');

  // Animation variants for words
  const wordVariants = {
    hidden: {},
    visible: {},
  };

  // Animation variants for characters
  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block mr-1.5"
          variants={wordVariants}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              className="inline-block"
              variants={characterVariants}
              transition={{
                delay: (wordIndex * 0.1) + (charIndex * 0.02),
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};