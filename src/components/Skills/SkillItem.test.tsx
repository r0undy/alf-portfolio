import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SkillItem from './SkillItem';
import type { Skill } from '../../types/portfolio';

describe('SkillItem', () => {
  const mockSkill: Skill = {
    id: '1',
    name: 'React',
    category: 'Frontend',
  };

  it('renders the skill icon', () => {
    const { container } = render(<SkillItem skill={mockSkill} index={0} />);
    const icon = container.querySelector('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('alt', 'React');
  });

  it('renders with correct CSS class', () => {
    const { container } = render(<SkillItem skill={mockSkill} index={0} />);
    const skillItem = container.querySelector('[class*="skillItem"]');
    expect(skillItem).toBeInTheDocument();
  });

  it('renders skill without category', () => {
    const skillWithoutCategory: Skill = {
      id: '2',
      name: 'TypeScript',
    };
    const { container } = render(<SkillItem skill={skillWithoutCategory} index={1} />);
    const icon = container.querySelector('img');
    expect(icon).toBeInTheDocument();
  });

  it('renders with position-specific class based on index', () => {
    const { container } = render(<SkillItem skill={mockSkill} index={3} />);
    const skillItem = container.querySelector('[class*="skillItem3"]');
    expect(skillItem).toBeInTheDocument();
  });

  it('renders skill circle container', () => {
    const { container } = render(<SkillItem skill={mockSkill} index={0} />);
    const skillCircle = container.querySelector('[class*="skillCircle"]');
    expect(skillCircle).toBeInTheDocument();
  });
});
