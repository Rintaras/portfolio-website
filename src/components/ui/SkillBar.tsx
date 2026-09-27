import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { getSkillIcon } from './skillIcons';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const IconComponent = getSkillIcon(skill.icon);

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <IconComponent size={20} className="text-primary-400" />
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-foreground/70">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};