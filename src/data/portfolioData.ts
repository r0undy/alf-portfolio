import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Your Name",
  tagline: "Full Stack Developer | Creative Problem Solver",
  workExperience: [
    {
      id: "1",
      jobTitle: "Senior Software Engineer",
      company: "Tech Company",
      startDate: "2022-01",
      endDate: "Present",
      description: "Led development of key features and mentored junior developers. Implemented scalable solutions using modern web technologies."
    },
    {
      id: "2",
      jobTitle: "Software Engineer",
      company: "Startup Inc",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Built full-stack applications and contributed to product architecture decisions."
    },
       {
      id: "3",
      jobTitle: "Software Engineer",
      company: "Startup Inc",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Built full-stack applications and contributed to product architecture decisions."
    },
       {
      id: "4",
      jobTitle: "Software Engineer",
      company: "Startup Inc",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Built full-stack applications and contributed to product architecture decisions."
    }
  ],
  skills: [
    { id: "1", name: "React.js", category: "Frontend" },
    { id: "2", name: "Express.js", category: "Backend" },
    { id: "3", name: "AWS Services", category: "Cloud" }
  ],
  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      id: "2",
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "TypeScript", "Firebase"],
      link: "https://github.com/yourusername/task-manager"
    },
    {
      id: "3",
      name: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs.",
      technologies: ["React", "CSS", "OpenWeather API"]
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};
