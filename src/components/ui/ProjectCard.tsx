import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden group cursor-pointer interactive"
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h3 className="heading-md text-white mb-2">{project.title}</h3>
        <p className="text-white/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary-500/20 text-primary-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};