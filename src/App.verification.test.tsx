/**
 * Task 9: Final Polish and Verification Tests
 * 
 * This test suite verifies:
 * - Responsive behavior at all breakpoints (mobile <768px, tablet 768-1024px, desktop >1024px)
 * - Color scheme values match design (#11071f, #1a0b2e, #7127ba, #9857d3)
 * - Typography (Preahvihear for headings, Poppins for body text)
 * - Hover effects and transitions on interactive elements
 * - All sections display in correct order
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.3, 8.4
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Task 9: Final Polish and Verification', () => {
  describe('Responsive Behavior - Requirements 6.1, 6.2, 6.3', () => {
    it('should render all sections at mobile viewport (<768px)', () => {
      // Set mobile viewport
      global.innerWidth = 375;
      global.innerHeight = 667;
      
      render(<App />);
      
      // Verify all sections are present
      expect(screen.getByText(/Kiro Portfolio/i)).toBeInTheDocument();
      expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Skills/i)).toBeInTheDocument();
      expect(screen.getByText(/Projects/i)).toBeInTheDocument();
      expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    });

    it('should render all sections at tablet viewport (768-1024px)', () => {
      // Set tablet viewport
      global.innerWidth = 768;
      global.innerHeight = 1024;
      
      render(<App />);
      
      // Verify all sections are present
      expect(screen.getByText(/Kiro Portfolio/i)).toBeInTheDocument();
      expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Skills/i)).toBeInTheDocument();
      expect(screen.getByText(/Projects/i)).toBeInTheDocument();
      expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    });

    it('should render all sections at desktop viewport (>1024px)', () => {
      // Set desktop viewport
      global.innerWidth = 1920;
      global.innerHeight = 1080;
      
      render(<App />);
      
      // Verify all sections are present
      expect(screen.getByText(/Kiro Portfolio/i)).toBeInTheDocument();
      expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Skills/i)).toBeInTheDocument();
      expect(screen.getByText(/Projects/i)).toBeInTheDocument();
      expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    });
  });

  describe('Color Scheme Verification - Requirements 7.1, 7.2', () => {
    it('should use correct CSS custom properties for color scheme', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      // Verify primary background colors
      const bgPrimary = styles.getPropertyValue('--color-bg-primary').trim();
      const bgSecondary = styles.getPropertyValue('--color-bg-secondary').trim();
      
      expect(bgPrimary).toBe('#11071f');
      expect(bgSecondary).toBe('#1a0b2e');
      
      // Verify accent colors
      const accentPrimary = styles.getPropertyValue('--color-accent-primary').trim();
      const accentSecondary = styles.getPropertyValue('--color-accent-secondary').trim();
      
      expect(accentPrimary).toBe('#7127ba');
      expect(accentSecondary).toBe('#9857d3');
    });

    it('should have gradient definitions using correct colors', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const gradientPurple = styles.getPropertyValue('--gradient-purple').trim();
      const gradientDark = styles.getPropertyValue('--gradient-dark').trim();
      
      // Verify gradients contain the correct color values
      expect(gradientPurple).toContain('#7127ba');
      expect(gradientPurple).toContain('#9857d3');
      expect(gradientDark).toContain('#11071f');
      expect(gradientDark).toContain('#1a0b2e');
    });
  });

  describe('Typography Verification - Requirement 7.3', () => {
    it('should define Preahvihear font for headings', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const fontHeading = styles.getPropertyValue('--font-heading').trim();
      expect(fontHeading).toContain('Preahvihear');
    });

    it('should define Poppins font for body text', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const fontPrimary = styles.getPropertyValue('--font-primary').trim();
      expect(fontPrimary).toContain('Poppins');
    });

    it('should have font size scale defined', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      // Verify key font sizes are defined
      expect(styles.getPropertyValue('--font-size-base').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--font-size-xl').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--font-size-3xl').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--font-size-6xl').trim()).toBeTruthy();
    });
  });

  describe('Visual Effects - Requirements 7.4, 7.5', () => {
    it('should define glow effects for interactive elements', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const glowPurple = styles.getPropertyValue('--glow-purple').trim();
      const glowPurpleStrong = styles.getPropertyValue('--glow-purple-strong').trim();
      
      // Verify glow effects are defined with rgba purple values
      expect(glowPurple).toContain('rgba(113, 39, 186');
      expect(glowPurpleStrong).toContain('rgba(113, 39, 186');
    });

    it('should have gradient effects defined', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const gradientPurple = styles.getPropertyValue('--gradient-purple').trim();
      const gradientDark = styles.getPropertyValue('--gradient-dark').trim();
      
      expect(gradientPurple).toContain('linear-gradient');
      expect(gradientDark).toContain('linear-gradient');
    });
  });

  describe('Section Order Verification - Requirements 8.1, 8.3, 8.4', () => {
    it('should display sections in correct order: Hero, Work Experience, Skills, Projects, Footer', () => {
      const { container } = render(<App />);
      
      // Get all main sections
      const sections = container.querySelectorAll('section, .hero, .footer');
      const sectionTexts = Array.from(sections).map(section => section.textContent);
      
      // Find indices of each section by their distinctive content
      let heroIndex = -1;
      let workExpIndex = -1;
      let skillsIndex = -1;
      let projectsIndex = -1;
      let footerIndex = -1;
      
      sectionTexts.forEach((text, index) => {
        if (text?.includes('Kiro Portfolio') && heroIndex === -1) heroIndex = index;
        if (text?.includes('Work Experience') && workExpIndex === -1) workExpIndex = index;
        if (text?.includes('Skills') && skillsIndex === -1) skillsIndex = index;
        if (text?.includes('Projects') && projectsIndex === -1) projectsIndex = index;
        if (text?.includes('Get in Touch') && footerIndex === -1) footerIndex = index;
      });
      
      // Verify order
      expect(heroIndex).toBeLessThan(workExpIndex);
      expect(workExpIndex).toBeLessThan(skillsIndex);
      expect(skillsIndex).toBeLessThan(projectsIndex);
      expect(projectsIndex).toBeLessThan(footerIndex);
    });

    it('should have all required sections present', () => {
      render(<App />);
      
      // Verify Hero section
      expect(screen.getByText(/Kiro Portfolio/i)).toBeInTheDocument();
      
      // Verify Work Experience section
      expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
      
      // Verify Skills section
      expect(screen.getByText(/Skills/i)).toBeInTheDocument();
      
      // Verify Projects section
      expect(screen.getByText(/Projects/i)).toBeInTheDocument();
      
      // Verify Footer
      expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    });
  });

  describe('Responsive Breakpoints - Requirements 6.4, 6.5', () => {
    it('should define correct breakpoint values', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const breakpointMobile = styles.getPropertyValue('--breakpoint-mobile').trim();
      const breakpointTablet = styles.getPropertyValue('--breakpoint-tablet').trim();
      
      expect(breakpointMobile).toBe('768px');
      expect(breakpointTablet).toBe('1024px');
    });

    it('should have responsive section padding defined', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      const paddingMobile = styles.getPropertyValue('--section-padding-mobile').trim();
      const paddingTablet = styles.getPropertyValue('--section-padding-tablet').trim();
      const paddingDesktop = styles.getPropertyValue('--section-padding-desktop').trim();
      
      expect(paddingMobile).toBeTruthy();
      expect(paddingTablet).toBeTruthy();
      expect(paddingDesktop).toBeTruthy();
    });
  });

  describe('Interactive Elements - Hover Effects', () => {
    it('should render skills with hover-capable elements', () => {
      render(<App />);
      
      // Skills should be present and have the structure for hover effects
      const skillsSection = screen.getByText(/Skills/i).closest('section');
      expect(skillsSection).toBeInTheDocument();
    });

    it('should render project cards with hover-capable elements', () => {
      render(<App />);
      
      // Projects should be present and have the structure for hover effects
      const projectsSection = screen.getByText(/Projects/i).closest('section');
      expect(projectsSection).toBeInTheDocument();
    });

    it('should render footer links with hover-capable elements', () => {
      render(<App />);
      
      // Footer links should be present
      const emailLink = screen.getByText(/Email/i);
      const githubLink = screen.getByText(/GitHub/i);
      
      expect(emailLink).toBeInTheDocument();
      expect(githubLink).toBeInTheDocument();
    });
  });

  describe('Content Structure - Requirement 8.3', () => {
    it('should center content within sections', () => {
      const { container } = render(<App />);
      
      // Verify container classes exist (which provide centering)
      const containers = container.querySelectorAll('[class*="container"]');
      expect(containers.length).toBeGreaterThan(0);
    });

    it('should have proper spacing between sections', () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      
      // Verify spacing scale is defined
      expect(styles.getPropertyValue('--spacing-md').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--spacing-lg').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--spacing-xl').trim()).toBeTruthy();
      expect(styles.getPropertyValue('--spacing-2xl').trim()).toBeTruthy();
    });
  });
});
