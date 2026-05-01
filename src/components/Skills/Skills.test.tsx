import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import type { Skill } from '../../types/portfolio';

describe('Skills', () => {
  const mockSkills: Skill[] = [
    { id: '1', name: 'React', category: 'Frontend' },
    { id: '2', name: 'TypeScript', category: 'Language' },
    { id: '3', name: 'Node.js', category: 'Backend' },
  ];

  it('renders the Skills heading', () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  it('renders all skills from the array', () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('displays empty state when no skills are provided', () => {
    render(<Skills skills={[]} />);
    expect(screen.getByText(/no skills to display/i)).toBeInTheDocument();
  });

  it('renders the correct number of skill items', () => {
    const { container } = render(<Skills skills={mockSkills} />);
    const skillItems = container.querySelectorAll('[class*="skillItem"]');
    expect(skillItems).toHaveLength(3);
  });

  it('does not render the skills grid when empty', () => {
    const { container } = render(<Skills skills={[]} />);
    const skillsGrid = container.querySelector('[class*="skillsGrid"]');
    expect(skillsGrid).not.toBeInTheDocument();
  });
});
