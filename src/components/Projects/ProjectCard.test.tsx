import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/portfolio';

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/test/project',
  };

  it('renders project name', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText(/A full-featured e-commerce platform/i)).toBeInTheDocument();
  });

  it('renders featured label', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('Featured Project')).toBeInTheDocument();
  });

  it('renders project link when provided', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
    links.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://github.com/test/project');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders project image', () => {
    const { container } = render(<ProjectCard project={mockProject} index={0} />);
    const image = container.querySelector('img[alt="E-Commerce Platform"]');
    expect(image).toBeInTheDocument();
  });

  it('applies left layout for even index', () => {
    const { container } = render(<ProjectCard project={mockProject} index={0} />);
    const card = container.querySelector('[class*="projectCardLeft"]');
    expect(card).toBeInTheDocument();
  });

  it('applies right layout for odd index', () => {
    const { container } = render(<ProjectCard project={mockProject} index={1} />);
    const card = container.querySelector('[class*="projectCardRight"]');
    expect(card).toBeInTheDocument();
  });

  it('does not render links when not provided', () => {
    const projectWithoutLink = { ...mockProject, link: undefined };
    const { container } = render(<ProjectCard project={projectWithoutLink} index={0} />);
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(0);
  });

  it('renders minimal project with only required fields', () => {
    const minimalProject: Project = {
      id: '2',
      name: 'Minimal Project',
      description: 'A minimal project description',
    };
    render(<ProjectCard project={minimalProject} index={0} />);
    expect(screen.getByText('Minimal Project')).toBeInTheDocument();
    expect(screen.getByText('A minimal project description')).toBeInTheDocument();
  });
});
