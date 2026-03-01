export type NavItem = { label: string; to: string };

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
};

export type SolutionCategory = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: "Energy" | "Water" | "IoT" | "Automation" | "Software" | "AI";
  tags: string[];
  highlights: string[];
};

export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  summary: string;
  responsibilities: string[];
  requirements: string[];
};
