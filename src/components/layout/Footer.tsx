import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  // Function to get the icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={16} />;
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'github':
        return <Github size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-background border-t border-foreground/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-xl font-bold text-foreground">
              YOUR<span className="text-primary-500">NAME</span>
            </a>
            <p className="text-foreground/60 mt-2">
              Creating exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};