import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '../ui/AnimatedText';
import SplitType from 'split-type';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: 'chars' });
      gsap.from(text.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.5,
        ease: 'back.out',
        delay: 1.5
      });
    }
  }, []);

  useEffect(() => {
    if (sectionRef.current && headingRef.current) {
      const section = sectionRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) - 0.5;
        const y = (clientY / window.innerHeight) - 0.5;
        
        gsap.to(headingRef.current, {
          duration: 0.8,
          x: x * 50,
          y: y * 50,
          rotationY: x * 10,
          rotationX: -y * 10,
          ease: 'power2.out',
        });
      };
      
      section.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section relative flex flex-col items-center justify-center overflow-hidden perspective-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"
        />
      </div>
      
      <div ref={headingRef} className="z-10 text-center max-w-4xl mx-auto px-4 preserve-3d">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-primary-400"
        >
          こんにちは、私は
        </motion.div>
        
        <h1 className="heading-xl mb-6">
          <AnimatedText text="Rintara" className="text-foreground" />
        </h1>
        
        <div ref={textRef} className="text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-8">
          創造的なコードで優れたデジタル体験を構築します
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#about"
            className="btn btn-primary interactive"
          >
            作品を見る
          </a>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <a href="#about" className="flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors">
          <span className="text-sm mb-2">スクロールダウン</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};