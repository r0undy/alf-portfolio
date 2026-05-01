import React from 'react';
import type { WorkExperience as WorkExperienceType } from '../../types/portfolio';
import { WorkExperienceItem } from './WorkExperienceItem';
import styles from './WorkExperience.module.css';
import gradientBg from '../../assets/work-experience/gradient.svg';
import starClean from '../../assets/work-experience/star-clean.png';

interface WorkExperienceProps {
  experiences: WorkExperienceType[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return (
      <section className={styles.workExperience} role="region" aria-label="Work experience section">
        <div className={styles.container}>
          <h2 className={styles.heading}>Work Experience</h2>
          <p className={styles.emptyState}>No work experience to display yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.workExperience} role="region" aria-label="Work experience section">
      {/* Background gradient */}
      <div className={styles.gradientContainer}>
        <img src={gradientBg} alt="" className={styles.gradient} />
      </div>
      
      {/* Decorative element */}
      <div className={styles.decorativeElement}>
        <img src={starClean} alt="" className={styles.decoration} />
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.heading}>Work Experience</h2>
        <div className={styles.experienceGrid}>
          {experiences.map((experience, index) => (
            <WorkExperienceItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
