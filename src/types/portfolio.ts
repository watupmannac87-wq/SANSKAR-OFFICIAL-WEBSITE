export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  demoUrl: string;
  isDemo: boolean;
  tags: string[];
  features: string[];
  type: 'restaurant' | 'salon' | 'business' | 'landing' | 'custom';
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}
