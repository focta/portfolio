// Hero Section
export interface HeroData {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}

// About Me Section
export interface AboutMeData {
  bio: string;
  interests: string[];
  values?: string[];
}

// Skills Section
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tool" | "other";
  level?: number;
}

export interface SkillsData {
  skills: Skill[];
}

// Projects Section (後で使用)
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  period: {
    start: string;
    end?: string;
  };
  links?: {
    github?: string;
    demo?: string;
  };
}

// Career Section
export interface Career {
  id: string;
  role: string;
  company?: string;
  period: {
    start: string;
    end?: string;
  };
  description: string;
  achievements?: string[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    period?: {
      start: string;
      end?: string;
    };
    links?: {
      github?: string;
      demo?: string;
    };
  }[];
}

export interface CareerData {
  careers: Career[];
}
