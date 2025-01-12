export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  stars: number;
  forks: number;
}

export interface Skill {
  id: string;
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}
