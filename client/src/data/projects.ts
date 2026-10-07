import walmart from '@assets/Walmart-clone.png';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    title: 'Responsive Music Website',
    description: 'A fully responsive front-end music website built with HTML and CSS, optimized for all devices with clean, intuitive design.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['HTML', 'CSS', 'Responsive'],
    githubUrl: 'https://github.com/mohamedhasan-coder/Responsive-Music-Website.git',
    status: 'completed'
  },
  {
    title: 'Walmart Clone',
    description: 'Modern e-commerce website clone of Walmart with interactive shopping features, product browsing, and seamless user experience across all devices.',
    image: walmart,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mohamedhasan-coder/Walmart-Clone.git',
    status: 'completed'
  },
  {
    title: 'Full Stack E-Commerce',
    description: 'Complete e-commerce solution with Spring Boot backend, React frontend, and integrated payment processing. Currently in development phase.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Spring Boot', 'React', 'MySQL'],
    status: 'in-progress'
  }
];
