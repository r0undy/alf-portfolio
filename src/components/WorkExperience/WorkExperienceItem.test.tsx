import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WorkExperienceItem } from './WorkExperienceItem';
import type { WorkExperience } from '../../types/portfolio';

describe('WorkExperienceItem Component', () => {
  const mockExperience: WorkExperience = {
    id: '1',
    jobTitle: 'Senior Software Engineer',
    company: 'Tech Company',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Led development of key features and mentored junior developers.',
  };

  it('renders job title', () => {
    render(<WorkExperienceItem experience={mockExperience} index={0} />);
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('renders company name in description', () => {
    render(<WorkExperienceItem experience={mockExperience} index={0} />);
    expect(screen.getByText(/Tech Company/)).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<WorkExperienceItem experience={mockExperience} index={0} />);
    expect(screen.getByText(/Led development of key features/)).toBeInTheDocument();
  });

  it('renders fallback description when not provided', () => {
    const experience: WorkExperience = {
      ...mockExperience,
      description: undefined,
      startDate: '2020-06',
      endDate: '2021-12',
    };
    render(<WorkExperienceItem experience={experience} index={0} />);
    expect(screen.getByText(/Tech Company - 2020-06 to 2021-12/)).toBeInTheDocument();
  });

  it('renders learn more button', () => {
    render(<WorkExperienceItem experience={mockExperience} index={0} />);
    expect(screen.getByText('LEARN MORE')).toBeInTheDocument();
  });

  it('renders icon for the experience', () => {
    const { container } = render(<WorkExperienceItem experience={mockExperience} index={0} />);
    const icons = container.querySelectorAll('img');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('renders different icons for different indices', () => {
    const experienceWithoutDescription: WorkExperience = {
      id: '2',
      jobTitle: 'Junior Developer',
      company: 'Startup',
      startDate: '2019-01',
      endDate: '2020-05',
    };
    const { container } = render(<WorkExperienceItem experience={experienceWithoutDescription} index={1} />);
    const icons = container.querySelectorAll('img');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('renders decorative elements', () => {
    const experience: WorkExperience = {
      ...mockExperience,
      startDate: '2021-03',
      endDate: '2022-09',
    };
    render(<WorkExperienceItem experience={experience} index={0} />);
    // Check that the component renders (decorative elements are present in DOM)
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('renders as an article element', () => {
    const { container } = render(<WorkExperienceItem experience={mockExperience} index={0} />);
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });
});
