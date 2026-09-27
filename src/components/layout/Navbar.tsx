import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl font-bold text-foreground interactive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          YOUR<span className="text-primary-500">NAME</span>
        </motion.a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={link.path}
                  className="text-foreground/70 hover:text-foreground transition-colors interactive"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 interactive"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-foreground" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-background z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4">
                  <motion.a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    YOUR<span className="text-primary-500">NAME</span>
                  </motion.a>
                  <button
                    className="p-2"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-foreground" />
                  </button>
                </div>

                <motion.nav
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <ul className="flex flex-col space-y-6 text-center">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                      >
                        <a
                          href={link.path}
                          className="text-2xl text-foreground/70 hover:text-foreground transition-colors"
                          onClick={closeMenu}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};