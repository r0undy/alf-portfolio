import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import type { Project } from '../../types/portfolio';

describe('Projects', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform',
      technologies: ['React', 'Node.js'],
      link: 'https://github.com/test/project1',
    },
    {
      id: '2',
      name: 'Task Manager',
      description: 'A collaborative task management app',
      technologies: ['TypeScript', 'Firebase'],
    },
    {
      id: '3',
      name: 'Weather Dashboard',
      description: 'A responsive weather dashboard',
    },
  ];

  it('renders the Projects heading', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders all projects from the array', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Manager')).toBeInTheDocument();
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
  });

  it('displays empty state when no projects are provided', () => {
    render(<Projects projects={[]} />);
    expect(screen.getByText(/no projects to display/i)).toBeInTheDocument();
  });

  it('renders the correct number of project cards', () => {
    const { container } = render(<Projects projects={mockProjects} />);
    const projectCards = container.querySelectorAll('[class*="projectCard"]');
    expect(projectCards).toHaveLength(3);
  });

  it('does not render the projects grid when empty', () => {
    const { container } = render(<Projects projects={[]} />);
    const projectsGrid = container.querySelector('[class*="projectsGrid"]');
    expect(projectsGrid).not.toBeInTheDocument();
  });
});
