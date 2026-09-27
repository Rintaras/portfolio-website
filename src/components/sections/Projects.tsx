import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../ui/AnimatedText';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { projects } from '../../data/projects';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">
            <AnimatedText text="Featured Projects" />
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience in different technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};