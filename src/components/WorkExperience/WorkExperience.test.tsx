import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WorkExperience } from './WorkExperience';
import type { WorkExperience as WorkExperienceType } from '../../types/portfolio';

describe('WorkExperience Component', () => {
  const mockExperiences: WorkExperienceType[] = [
    {
      id: '1',
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Company',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Led development of key features and mentored junior developers.',
    },
    {
      id: '2',
      jobTitle: 'Software Engineer',
      company: 'Startup Inc',
      startDate: '2020-06',
      endDate: '2021-12',
      description: 'Built full-stack applications.',
    },
  ];

  it('renders section heading', () => {
    render(<WorkExperience experiences={mockExperiences} />);
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  it('renders all work experience items', () => {
    render(<WorkExperience experiences={mockExperiences} />);
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Company')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Startup Inc')).toBeInTheDocument();
  });

  it('renders job descriptions when provided', () => {
    render(<WorkExperience experiences={mockExperiences} />);
    expect(screen.getByText('Led development of key features and mentored junior developers.')).toBeInTheDocument();
    expect(screen.getByText('Built full-stack applications.')).toBeInTheDocument();
  });

  it('displays empty state when no experiences provided', () => {
    render(<WorkExperience experiences={[]} />);
    expect(screen.getByText('No work experience to display yet.')).toBeInTheDocument();
  });

  it('displays empty state when experiences is undefined', () => {
    render(<WorkExperience experiences={undefined as any} />);
    expect(screen.getByText('No work experience to display yet.')).toBeInTheDocument();
  });

  it('renders with proper ARIA attributes', () => {
    render(<WorkExperience experiences={mockExperiences} />);
    const section = screen.getByRole('region', { name: /work experience section/i });
    expect(section).toBeInTheDocument();
  });

  it('renders correct number of experience items', () => {
    const { container } = render(<WorkExperience experiences={mockExperiences} />);
    const articles = container.querySelectorAll('article');
    expect(articles).toHaveLength(2);
  });
});
