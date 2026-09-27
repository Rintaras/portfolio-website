export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  path: string;
}