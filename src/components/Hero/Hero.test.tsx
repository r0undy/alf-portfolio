import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders name and tagline', () => {
    render(<Hero name="John Doe" tagline="Full Stack Developer" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  it('renders with correct heading level', () => {
    render(<Hero name="Jane Smith" tagline="Creative Designer" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Jane Smith');
  });

  it('renders with correct ARIA attributes', () => {
    render(<Hero name="Test User" tagline="Test Tagline" />);
    const section = screen.getByRole('region', { name: /hero section/i });
    expect(section).toBeInTheDocument();
  });

  it('renders with empty name', () => {
    render(<Hero name="" tagline="Developer" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('');
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders with empty tagline', () => {
    render(<Hero name="John Doe" tagline="" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    const tagline = screen.getByText('', { selector: 'p' });
    expect(tagline).toBeInTheDocument();
  });

  it('renders with long name', () => {
    const longName = 'John Alexander Christopher Smith-Johnson III';
    render(<Hero name={longName} tagline="Developer" />);
    expect(screen.getByText(longName)).toBeInTheDocument();
  });

  it('renders with long tagline', () => {
    const longTagline = 'Full Stack Developer | Creative Problem Solver | Tech Enthusiast | Open Source Contributor';
    render(<Hero name="John Doe" tagline={longTagline} />);
    expect(screen.getByText(longTagline)).toBeInTheDocument();
  });

  it('applies CSS classes to section', () => {
    const { container } = render(<Hero name="John Doe" tagline="Developer" />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('class');
    expect(section?.className).toBeTruthy();
  });

  it('renders name with gradient text styling class', () => {
    const { container } = render(<Hero name="John Doe" tagline="Developer" />);
    const nameElement = container.querySelector('h1');
    expect(nameElement).toHaveAttribute('class');
    expect(nameElement?.className).toBeTruthy();
  });

  it('renders tagline with correct styling class', () => {
    const { container } = render(<Hero name="John Doe" tagline="Developer" />);
    const taglineElement = container.querySelector('p');
    expect(taglineElement).toHaveAttribute('class');
    expect(taglineElement?.className).toBeTruthy();
  });
});
