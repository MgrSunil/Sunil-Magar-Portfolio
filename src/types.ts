export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "IoT" | "Robotics" | "Safety" | "Featured" | "All" | "Safety & Monitoring" | "Miscellaneous";
  image?: string;
  github?: string;
  demo?: string;
  components?: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
