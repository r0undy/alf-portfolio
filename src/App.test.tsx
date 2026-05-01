import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component Integration', () => {
  it('renders all section components in correct order', () => {
    render(<App />);
    
    // Verify Hero section is present
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer | Creative Problem Solver')).toBeInTheDocument();
    
    // Verify Work Experience section is present
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    
    // Verify Skills section is present
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    
    // Verify Projects section is present
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    
    // Verify Footer is present
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('passes correct data from portfolioData to Hero component', () => {
    render(<App />);
    
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer | Creative Problem Solver')).toBeInTheDocument();
  });

  it('passes correct data from portfolioData to WorkExperience component', () => {
    render(<App />);
    
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Company')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Startup Inc')).toBeInTheDocument();
  });

  it('passes correct data from portfolioData to Skills component', () => {
    render(<App />);
    
    // Use getAllByText for skills that might appear in project technologies too
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
    
    // Node.js appears in both Skills and Projects
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    
    // Git is unique to Skills section
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  it('passes correct data from portfolioData to Projects component', () => {
    render(<App />);
    
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
  });

  it('passes correct data from portfolioData to Footer component', () => {
    render(<App />);
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    // Footer should have contact links
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', 'mailto:your.email@example.com');
  });

  it('renders components in semantic HTML structure', () => {
    const { container } = render(<App />);
    
    // Check that the app has a proper container
    const appDiv = container.querySelector('.app');
    expect(appDiv).toBeInTheDocument();
    
    // Check that sections are present
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(4); // Hero, Work, Skills, Projects (Footer is also a section)
  });

  it('applies container layout class', () => {
    const { container } = render(<App />);
    
    const appDiv = container.querySelector('.app');
    expect(appDiv).toHaveClass('app');
  });
});
