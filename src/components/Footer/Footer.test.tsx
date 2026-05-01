import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import type { ContactInfo } from '../../types/portfolio';

describe('Footer Component', () => {
  const mockContact: ContactInfo = {
    email: 'test@example.com',
    github: 'https://github.com/testuser',
    linkedin: 'https://linkedin.com/in/testuser',
    twitter: 'https://twitter.com/testuser',
  };

  it('renders the footer with heading', () => {
    render(<Footer contact={mockContact} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders email link when email is provided', () => {
    render(<Footer contact={mockContact} />);
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
  });

  it('renders GitHub link when GitHub is provided', () => {
    render(<Footer contact={mockContact} />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/testuser');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders LinkedIn link when LinkedIn is provided', () => {
    render(<Footer contact={mockContact} />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Twitter link when Twitter is provided', () => {
    render(<Footer contact={mockContact} />);
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/testuser');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render email link when email is not provided', () => {
    const contactWithoutEmail: ContactInfo = {
      github: 'https://github.com/testuser',
    };
    render(<Footer contact={contactWithoutEmail} />);
    expect(screen.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
  });

  it('does not render GitHub link when GitHub is not provided', () => {
    const contactWithoutGithub: ContactInfo = {
      email: 'test@example.com',
    };
    render(<Footer contact={contactWithoutGithub} />);
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
  });

  it('renders copyright text with current year', () => {
    render(<Footer contact={mockContact} />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} All rights reserved.`)).toBeInTheDocument();
  });

  it('renders with empty contact info', () => {
    const emptyContact: ContactInfo = {};
    render(<Footer contact={emptyContact} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /email/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /linkedin/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /twitter/i })).not.toBeInTheDocument();
  });

  it('renders all contact links when all are provided', () => {
    render(<Footer contact={mockContact} />);
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  });
});
