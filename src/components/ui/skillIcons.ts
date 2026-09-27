import {
  Braces,
  Cloud,
  Code2,
  Figma,
  Flame,
  Layout,
  Server,
  Terminal,
  Wind,
  type LucideIcon,
} from 'lucide-react';

const skillIconMap: Record<string, LucideIcon> = {
  typescript: Braces,
  react: Code2,
  nextjs: Layout,
  nodejs: Server,
  python: Terminal,
  go: Terminal,
  aws: Cloud,
  firebase: Flame,
  tailwind: Wind,
  figma: Figma,
};

export function getSkillIcon(icon: string): LucideIcon {
  return skillIconMap[icon] ?? Code2;
}
