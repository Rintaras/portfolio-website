import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../ui/AnimatedText';
import { SkillBar } from '../ui/SkillBar';
import { skills } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">
            <AnimatedText text="Skills & Expertise" />
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6">
            <AnimatedText text="My Development Process" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Discovery & Planning',
                description: 'Understanding requirements and planning architecture',
              },
              {
                title: 'Design & Development',
                description: 'Creating elegant solutions with clean code',
              },
              {
                title: 'Testing & Deployment',
                description: 'Ensuring quality and reliable delivery',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-foreground/5 rounded-lg p-6 border border-foreground/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="text-primary-400 text-lg font-bold mb-2">{`0${index + 1}`}</div>
                <h4 className="heading-sm mb-2">{step.title}</h4>
                <p className="text-foreground/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};