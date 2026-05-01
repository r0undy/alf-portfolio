import type { Skill } from '../../types/portfolio';
import SkillItem from './SkillItem';
import styles from './Skills.module.css';
import mascot from '../../assets/skills/mascot.png';
import arrows from '../../assets/skills/arrows.svg';
import ellipseBg from '../../assets/skills/ellipse-bg.svg';
import background from '../../assets/skills/background.png';
import Antigravity from '../Antigravity/Antigravity';

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className={styles.skills}>
      {/* Antigravity particle effect */}
      <div className={styles.antigravityContainer}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={'#FF9FFC'}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>
      
      {/* Background decorative element */}
      <div className={styles.backgroundDecor}>
        <img src={background} alt="" className={styles.backgroundImage} />
      </div>
      
      <div className={styles.container}>
        {/* Header text */}
        <div className={styles.header}>
          <p className={styles.headerText}>
            I'm currently looking to join a <span className={styles.highlight}>cross-functional</span> team
          </p>
          <p className={styles.subheaderText}>
            that values improving people's lives through accessible design
          </p>
        </div>
        
        {/* Skills visualization */}
        <div className={styles.skillsVisualization}>
          {/* Arrows connecting skills */}
          <div className={styles.arrowsContainer}>
            <img src={arrows} alt="" className={styles.arrows} />
          </div>
          
          {/* Background ellipse */}
          <div className={styles.ellipseContainer}>
            <img src={ellipseBg} alt="" className={styles.ellipse} />
          </div>
          
          {/* Central mascot */}
          <div className={styles.mascotContainer}>
            <img src={mascot} alt="Mascot" className={styles.mascot} />
          </div>
          
          {/* Skill items in circular layout */}
          {skills.length > 0 && (
            <div className={styles.skillsCircle}>
              {skills.slice(0, 13).map((skill, index) => (
                <SkillItem key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          )}
        </div>
        
        {skills.length === 0 && (
          <p className={styles.emptyState}>No skills to display</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
