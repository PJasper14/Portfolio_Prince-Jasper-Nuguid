export type ThemeMode = 'dark' | 'light';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Tools' | 'Other';
  level?: string;
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  department?: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string;
  lessonsLearned: string;
  githubUrl?: string;
  liveUrl?: string;
  modules?: string[];
}

export interface CertificationGroup {
  provider: 'Cisco' | 'IBM' | 'TESDA' | 'Google' | 'Wadhwani' | 'Other';
  items: {
    title: string;
    issueDate?: string;
    credentialId?: string;
    description?: string;
    skills?: string[];
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  coursework: string[];
  achievements: string[];
}
