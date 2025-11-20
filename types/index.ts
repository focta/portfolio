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

// Skills Section (後で使用)
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tool" | "other";
  level?: number;
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

// Career Section (後で使用)
export interface Career {
  id: string;
  role: string;
  period: {
    start: string;
    end?: string;
  };
  description: string;
  achievements?: string[];
}

