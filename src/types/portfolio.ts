export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface ContactInfo {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  workExperience: WorkExperience[];
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
}
