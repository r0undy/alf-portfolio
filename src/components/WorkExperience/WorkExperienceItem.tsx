import React from 'react';
import type { WorkExperience } from '../../types/portfolio';
import styles from './WorkExperience.module.css';
import icon1 from '../../assets/work-experience/icon1.png';
import icon2 from '../../assets/work-experience/icon2.png';
import icon3 from '../../assets/work-experience/icon3.png';
import icon4 from '../../assets/work-experience/icon4.png';
import buttonBg from '../../assets/work-experience/button-bg.svg';
import ellipse1 from '../../assets/work-experience/ellipse1.svg';
import ellipse2 from '../../assets/work-experience/ellipse2.svg';
import ellipse3 from '../../assets/work-experience/ellipse3.svg';
import ellipse4 from '../../assets/work-experience/ellipse4.svg';
import ellipse5 from '../../assets/work-experience/ellipse5.svg';

interface WorkExperienceItemProps {
  experience: WorkExperience;
  index: number;
}

const icons = [icon1, icon2, icon3, icon4];
const ellipses = [ellipse1, ellipse3, ellipse5, ellipse1]; // Reuse ellipses for variety

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ experience, index }) => {
  const icon = icons[index % icons.length];
  const ellipse = ellipses[index % ellipses.length];

  return (
    <article className={styles.experienceCard}>
      {/* Card gradient background */}
      <div className={styles.cardGradient} />
      
      {/* Purple accent bar */}
      <div className={styles.accentBar} />
      
      {/* Icon container with decorative elements */}
      <div className={styles.iconContainer}>
        <img src={icon} alt="" className={styles.icon} />
        <div className={styles.iconDecoration}>
          <img src={ellipse} alt="" className={styles.ellipse} />
        </div>
        <div className={styles.dots}>
          <img src={ellipse2} alt="" className={styles.dot} />
          <img src={ellipse2} alt="" className={styles.dot} />
          <img src={ellipse4} alt="" className={styles.dot} />
          <img src={ellipse4} alt="" className={styles.dot} />
        </div>
      </div>
      
      {/* Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{experience.jobTitle}</h3>
        <p className={styles.cardDescription}>
          {experience.description || `${experience.company} - ${experience.startDate} to ${experience.endDate}`}
        </p>
        <button className={styles.learnMoreButton}>
          <img src={buttonBg} alt="" className={styles.buttonBg} />
          <span className={styles.buttonText}>LEARN MORE</span>
        </button>
      </div>
    </article>
  );
};
