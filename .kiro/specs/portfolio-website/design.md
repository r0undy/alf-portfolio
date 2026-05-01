# Design Document: Portfolio Website

## Overview

This design document specifies the technical architecture for a modern portfolio website built with React, TypeScript, and Vite. The application features a space-themed design with dark purple/black backgrounds, purple accents, and gradient effects. The website consists of five main sections (Hero, Work Experience, Skills, Projects, Footer) organized in a single-page layout with responsive design support for mobile, tablet, and desktop viewports.

### Design Goals

- **Component-based architecture**: Modular, reusable React components for each section
- **Type safety**: Full TypeScript coverage for props, state, and data structures
- **Responsive design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Design system consistency**: Centralized theme configuration for colors, typography, and spacing
- **Performance**: Optimized rendering with React best practices
- **Maintainability**: Clear separation of concerns between components, styles, and data

## Architecture

### High-Level Structure

The application follows a component-based architecture with a single-page layout:

```
App (Root Component)
├── Hero Section
├── Work Experience Section
├── Skills Section
├── Projects Section
└── Footer
```

### Technology Stack

- **Framework**: React 19.2.5
- **Language**: TypeScript 6.0.2
- **Build Tool**: Vite 8.0.10
- **Styling**: CSS Modules or plain CSS with CSS custom properties
- **State Management**: React hooks (useState, useEffect) for local component state
- **No external UI libraries**: Custom components to maintain design control

### Directory Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── WorkExperience/
│   │   ├── WorkExperience.tsx
│   │   ├── WorkExperienceItem.tsx
│   │   └── WorkExperience.module.css
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   ├── SkillItem.tsx
│   │   └── Skills.module.css
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Projects.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── types/
│   └── portfolio.ts
├── data/
│   └── portfolioData.ts
├── styles/
│   ├── theme.css
│   └── global.css
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Components and Interfaces

### Type Definitions

**File: `src/types/portfolio.ts`**

```typescript
export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface ContactInfo {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  workExperience: WorkExperience[];
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
}
```

### Component Specifications

#### 1. App Component

**File: `src/App.tsx`**

**Responsibility**: Root component that orchestrates the layout and passes data to child components.

**Props**: None (root component)

**State**: 
- `portfolioData: PortfolioData` - Contains all portfolio content

**Behavior**:
- Loads portfolio data from `portfolioData.ts`
- Renders all section components in order
- Applies global layout styles

#### 2. Hero Component

**File: `src/components/Hero/Hero.tsx`**

**Responsibility**: Displays the introductory section with name and tagline.

**Props**:
```typescript
interface HeroProps {
  name: string;
  tagline: string;
}
```

**Styling Requirements**:
- Full viewport width
- Dark purple/black background (#11071f or #1a0b2e)
- Centered content
- Preahvihear font for name (large, bold)
- Poppins font for tagline
- Gradient text effect on name (optional enhancement)
- Minimum height: 100vh or 600px

#### 3. WorkExperience Component

**File: `src/components/WorkExperience/WorkExperience.tsx`**

**Responsibility**: Displays work experience section with a list of work entries.

**Props**:
```typescript
interface WorkExperienceProps {
  experiences: WorkExperience[];
}
```

**Child Components**:
- `WorkExperienceItem`: Renders individual work experience entry

**Styling Requirements**:
- Section heading "Work Experience"
- Dark background with subtle gradient
- Centered content container (max-width: 1200px)
- Vertical list layout
- Purple accent line or border for visual separation

#### 4. WorkExperienceItem Component

**File: `src/components/WorkExperience/WorkExperienceItem.tsx`**

**Props**:
```typescript
interface WorkExperienceItemProps {
  experience: WorkExperience;
}
```

**Rendering**:
- Job title (prominent, Poppins semi-bold)
- Company name (Poppins regular)
- Time period (formatted as "Month Year - Month Year")
- Optional description

#### 5. Skills Component

**File: `src/components/Skills/Skills.tsx`**

**Responsibility**: Displays skills section with a grid or list of skills.

**Props**:
```typescript
interface SkillsProps {
  skills: Skill[];
}
```

**Child Components**:
- `SkillItem`: Renders individual skill badge

**Styling Requirements**:
- Section heading "Skills"
- Grid layout (responsive: 2 columns mobile, 3 tablet, 4+ desktop)
- Purple accent colors for skill badges
- Glowing effect on hover (box-shadow with purple)

#### 6. SkillItem Component

**File: `src/components/Skills/SkillItem.tsx`**

**Props**:
```typescript
interface SkillItemProps {
  skill: Skill;
}
```

**Rendering**:
- Skill name in a badge/pill design
- Purple border or background (#7127ba)
- Rounded corners
- Hover effect with glow

#### 7. Projects Component

**File: `src/components/Projects/Projects.tsx`**

**Responsibility**: Displays projects section with project cards.

**Props**:
```typescript
interface ProjectsProps {
  projects: Project[];
}
```

**Child Components**:
- `ProjectCard`: Renders individual project card

**Styling Requirements**:
- Section heading "Projects"
- Grid layout (1 column mobile, 2 tablet, 3 desktop)
- Card-based design with hover effects

#### 8. ProjectCard Component

**File: `src/components/Projects/ProjectCard.tsx`**

**Props**:
```typescript
interface ProjectCardProps {
  project: Project;
}
```

**Rendering**:
- Project name (heading)
- Description (paragraph)
- Optional technologies list (badges)
- Optional link (styled button or link)
- Card with dark background and purple border
- Hover effect: lift and glow

#### 9. Footer Component

**File: `src/components/Footer/Footer.tsx`**

**Responsibility**: Displays contact information and footer content.

**Props**:
```typescript
interface FooterProps {
  contact: ContactInfo;
}
```

**Styling Requirements**:
- Full viewport width
- Dark background (#11071f)
- Centered content
- Contact links with icons (optional)
- Purple accent on hover
- Copyright or attribution text

## Data Models

### Portfolio Data Structure

**File: `src/data/portfolioData.ts`**

```typescript
import { PortfolioData } from '../types/portfolio';

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
      description: "Led development of key features..."
    }
  ],
  skills: [
    { id: "1", name: "React", category: "Frontend" },
    { id: "2", name: "TypeScript", category: "Language" },
    { id: "3", name: "Node.js", category: "Backend" }
  ],
  projects: [
    {
      id: "1",
      name: "Project Name",
      description: "A brief description of the project...",
      technologies: ["React", "TypeScript"],
      link: "https://github.com/..."
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};
```

## Design System

### Color Palette

**File: `src/styles/theme.css`**

```css
:root {
  /* Primary Backgrounds */
  --color-bg-primary: #11071f;
  --color-bg-secondary: #1a0b2e;
  
  /* Purple Accents */
  --color-accent-primary: #7127ba;
  --color-accent-secondary: #9857d3;
  
  /* Text Colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: #e0e0e0;
  --color-text-muted: #a0a0a0;
  
  /* Gradients */
  --gradient-purple: linear-gradient(135deg, #7127ba 0%, #9857d3 100%);
  --gradient-dark: linear-gradient(180deg, #11071f 0%, #1a0b2e 100%);
  
  /* Effects */
  --glow-purple: 0 0 20px rgba(113, 39, 186, 0.5);
  --glow-purple-strong: 0 0 30px rgba(113, 39, 186, 0.8);
}
```

### Typography

**Font Loading**: Import Google Fonts in `index.html` or `index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
/* Note: Preahvihear may need to be sourced from Google Fonts or local files */

:root {
  /* Font Families */
  --font-primary: 'Poppins', sans-serif;
  --font-heading: 'Preahvihear', sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 4rem;      /* 64px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Spacing System

```css
:root {
  /* Spacing Scale */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
  --spacing-4xl: 6rem;     /* 96px */
  
  /* Section Spacing */
  --section-padding-mobile: var(--spacing-2xl);
  --section-padding-tablet: var(--spacing-3xl);
  --section-padding-desktop: var(--spacing-4xl);
}
```

### Responsive Breakpoints

```css
:root {
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
}

/* Usage in media queries */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### Layout Constraints

```css
:root {
  --container-max-width: 1200px;
  --container-padding: var(--spacing-lg);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
```

## Styling Approach

### CSS Modules Strategy

Each component will have its own CSS Module file for scoped styling:

**Example: `Hero.module.css`**

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--gradient-dark);
  padding: var(--section-padding-mobile);
  text-align: center;
}

.name {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  background: var(--gradient-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
}

.tagline {
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
}

@media (min-width: 768px) {
  .hero {
    padding: var(--section-padding-tablet);
  }
  
  .name {
    font-size: var(--font-size-5xl);
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: var(--section-padding-desktop);
  }
  
  .name {
    font-size: var(--font-size-6xl);
  }
}
```

### Global Styles

**File: `src/styles/global.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  width: 100%;
  padding: var(--section-padding-mobile) 0;
}

@media (min-width: 768px) {
  section {
    padding: var(--section-padding-tablet) 0;
  }
}

@media (min-width: 1024px) {
  section {
    padding: var(--section-padding-desktop) 0;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
}

a {
  color: var(--color-accent-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-accent-primary);
}

button {
  font-family: var(--font-primary);
  cursor: pointer;
  border: none;
  background: none;
}
```

## Error Handling

### Component Error Boundaries

While this portfolio website has minimal error-prone operations, we should implement basic error handling:

1. **Missing Data Handling**: Components should gracefully handle empty arrays or missing data
   - Display "No experience to show" if `workExperience` is empty
   - Display "No skills to show" if `skills` is empty
   - Display "No projects to show" if `projects` is empty

2. **Type Safety**: TypeScript will catch type errors at compile time

3. **Fallback Content**: Provide default values in `portfolioData.ts` to ensure the site always renders

**Example Error Handling in Component**:

```typescript
// WorkExperience.tsx
export const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return (
      <section className={styles.workExperience}>
        <div className="container">
          <h2>Work Experience</h2>
          <p className={styles.emptyState}>No work experience to display yet.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className={styles.workExperience}>
      <div className="container">
        <h2>Work Experience</h2>
        {experiences.map(exp => (
          <WorkExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};
```

## Testing Strategy

This portfolio website is primarily a presentational application with minimal business logic. The testing strategy focuses on component rendering, responsive behavior, and visual consistency rather than property-based testing.

### Why Property-Based Testing Does Not Apply

Property-based testing (PBT) is not appropriate for this feature because:

1. **Presentational Components**: The components are primarily concerned with rendering UI based on static data, not transforming or processing data
2. **No Complex Business Logic**: There are no algorithms, parsers, or data transformations that would benefit from testing universal properties
3. **Visual/Layout Focus**: The requirements focus on visual presentation, responsive layout, and styling - areas better suited to snapshot tests and visual regression testing
4. **Static Content**: The portfolio data is static configuration, not dynamic user input requiring validation

### Recommended Testing Approach

#### 1. Component Unit Tests

Use React Testing Library for component rendering tests:

**Test Coverage**:
- Each component renders without crashing
- Components display correct data from props
- Empty state handling (e.g., no work experience)
- Conditional rendering (e.g., optional project links)

**Example Test Structure**:

```typescript
// Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders name and tagline', () => {
    render(<Hero name="John Doe" tagline="Developer" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });
});

// WorkExperience.test.tsx
describe('WorkExperience Component', () => {
  it('displays empty state when no experiences provided', () => {
    render(<WorkExperience experiences={[]} />);
    expect(screen.getByText(/no work experience/i)).toBeInTheDocument();
  });
  
  it('renders all work experience items', () => {
    const experiences = [
      { id: '1', jobTitle: 'Engineer', company: 'Tech Co', startDate: '2020', endDate: '2022' }
    ];
    render(<WorkExperience experiences={experiences} />);
    expect(screen.getByText('Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Co')).toBeInTheDocument();
  });
});
```

#### 2. Responsive Layout Tests

Test responsive behavior at different viewport sizes:

```typescript
describe('Responsive Layout', () => {
  it('applies mobile layout at 767px width', () => {
    global.innerWidth = 767;
    global.dispatchEvent(new Event('resize'));
    // Assert mobile-specific classes or styles
  });
  
  it('applies tablet layout at 768px width', () => {
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    // Assert tablet-specific classes or styles
  });
  
  it('applies desktop layout at 1024px width', () => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    // Assert desktop-specific classes or styles
  });
});
```

#### 3. Snapshot Tests

Use snapshot testing to catch unintended visual changes:

```typescript
import { render } from '@testing-library/react';
import { Hero } from './Hero';

it('matches snapshot', () => {
  const { container } = render(<Hero name="John Doe" tagline="Developer" />);
  expect(container).toMatchSnapshot();
});
```

#### 4. Visual Regression Testing (Optional)

For production applications, consider tools like:
- **Chromatic**: Visual regression testing for Storybook
- **Percy**: Automated visual testing
- **Playwright**: End-to-end testing with screenshot comparison

#### 5. Accessibility Testing

Ensure WCAG compliance:

```typescript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<Hero name="John Doe" tagline="Developer" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### 6. Integration Tests

Test the full App component to ensure sections render in correct order:

```typescript
describe('App Integration', () => {
  it('renders all sections in correct order', () => {
    render(<App />);
    const sections = screen.getAllByRole('region'); // Assuming sections have role="region"
    // Assert order: Hero, Work Experience, Skills, Projects, Footer
  });
});
```

### Test Configuration

**Required Dependencies**:
```json
{
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "vitest": "^1.0.0",
    "@vitest/ui": "^1.0.0",
    "jsdom": "^23.0.0",
    "jest-axe": "^8.0.0"
  }
}
```

**Vitest Configuration** (`vite.config.ts`):
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
```

### Testing Summary

- **Unit Tests**: Verify component rendering and data display
- **Snapshot Tests**: Catch unintended UI changes
- **Responsive Tests**: Validate layout at different breakpoints
- **Accessibility Tests**: Ensure WCAG compliance
- **Integration Tests**: Verify section ordering and data flow
- **No Property-Based Tests**: Not applicable for presentational UI components

## Implementation Plan

### Phase 1: Setup and Foundation
1. Create directory structure
2. Set up type definitions (`portfolio.ts`)
3. Create theme CSS file with design tokens
4. Set up global styles
5. Create sample portfolio data

### Phase 2: Component Development
1. Implement Hero component
2. Implement WorkExperience and WorkExperienceItem components
3. Implement Skills and SkillItem components
4. Implement Projects and ProjectCard components
5. Implement Footer component

### Phase 3: Integration
1. Update App.tsx to use all components
2. Pass portfolio data to components
3. Test responsive behavior at all breakpoints
4. Refine spacing and visual effects

### Phase 4: Polish
1. Add hover effects and transitions
2. Implement gradient and glow effects
3. Optimize font loading
4. Test cross-browser compatibility
5. Accessibility audit

### Phase 5: Testing
1. Write unit tests for each component
2. Add snapshot tests
3. Test responsive layouts
4. Run accessibility tests
5. Manual testing on real devices

## Performance Considerations

1. **Font Loading**: Use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
2. **Image Optimization**: If images are added later, use WebP format with fallbacks
3. **CSS Optimization**: Use CSS custom properties for theme values to enable easy theming
4. **Code Splitting**: Not necessary for this small application, but consider if it grows
5. **Lazy Loading**: Not needed for single-page portfolio with minimal content

## Accessibility Considerations

1. **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
2. **ARIA Labels**: Add aria-labels to icon-only links in footer
3. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
4. **Color Contrast**: Verify text meets WCAG AA standards (4.5:1 for normal text)
5. **Focus Indicators**: Provide visible focus states for keyboard navigation
6. **Screen Reader Support**: Test with screen readers (NVDA, JAWS, VoiceOver)

## Browser Support

Target modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Future Enhancements

Potential features for future iterations:
1. **Dark/Light Mode Toggle**: Add theme switching capability
2. **Animations**: Scroll-triggered animations using Intersection Observer
3. **Contact Form**: Add a functional contact form with backend integration
4. **CMS Integration**: Connect to a headless CMS for easy content updates
5. **Blog Section**: Add a blog or articles section
6. **Internationalization**: Support multiple languages
7. **Analytics**: Integrate Google Analytics or similar
8. **SEO Optimization**: Add meta tags, Open Graph, and structured data

## Conclusion

This design provides a solid foundation for a modern, responsive portfolio website. The component-based architecture ensures maintainability, while the design system guarantees visual consistency. The implementation follows React and TypeScript best practices, making the codebase easy to understand and extend.
