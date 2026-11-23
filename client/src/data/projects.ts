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
    title: 'Course Registration System',
    description:
      'A full-stack course registration application built with Spring Boot and MySQL. Implements REST APIs, course management, student registration, service-repository architecture, and JPA/Hibernate database integration.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'REST API',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    status: 'completed'
  },

  {
    title: 'Student Management System',
    description:
      'A Spring Boot REST API for managing students and departments with CRUD operations, entity relationships, validation, and MySQL database integration using Spring Data JPA.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'REST API'
    ],
    githubUrl:
      'https://github.com/mohamedhasan-m/Student_Management',
    status: 'completed'
  },

  {
    title: 'Campus Management System',
    description:
      'A Java-based management application designed to organize campus-related information and operations using object-oriented programming and structured application architecture.',
    image:
      'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Java',
      'OOP',
      'MySQL',
      'SQL'
    ],
    githubUrl:
      'https://github.com/mohamedhasan-m/campus_management_system',
    status: 'completed'
  },

  {
    title: 'Invoice Maker',
    description:
      'A full-stack invoice management application for creating and managing invoices with a React frontend and Spring Boot backend connected to a relational database.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'MySQL',
      'REST API',
      'JPA'
    ],
    status: 'completed'
  },

  {
    title: 'Dynamic Learning Platform',
    description:
      'A full-stack learning platform developed during my internship with features for study tracking and mock interview preparation using a React frontend and Spring Boot backend.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React',
      'Spring Boot',
      'Java',
      'MySQL',
      'REST API'
    ],
    status: 'completed'
  },

  {
    title: 'AI Trip Planner',
    description:
      'An AI-powered travel planning application that generates personalized trip itineraries and helps users organize destinations, activities, hotels, and travel plans.',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'AI',
      'Clerk',
      'TypeScript'
    ],
    status: 'in-progress'
  }
];
