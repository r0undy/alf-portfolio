import type { Project } from '../../types/portfolio';
import styles from './Projects.module.css';
import project1Img from '../../assets/projects/project1.png';
import project2Img from '../../assets/projects/project2.png';
import iconClick from '../../assets/projects/icon-click.svg';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectImages = [project1Img, project2Img, project1Img]; // Reuse images for demo

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const projectImage = projectImages[index % projectImages.length];
  
  return (
    <div className={`${styles.projectCard} ${isEven ? styles.projectCardLeft : styles.projectCardRight}`}>
      {/* Project Image */}
      <div className={styles.projectImageContainer}>
        <img src={projectImage} alt={project.name} className={styles.projectImage} />
      </div>
      
      {/* Project Info Card */}
      <div className={styles.projectInfo}>
        <div className={styles.projectInfoCard}>
          <span className={styles.featuredLabel}>Featured Project</span>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectDescriptionCard}>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
          
          {/* Technology Icons/Links */}
          <div className={styles.projectLinks}>
            {project.link && (
              <>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLinkIcon}>
                  <img src={iconClick} alt="View project" />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLinkIcon}>
                  <img src={iconClick} alt="GitHub" />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLinkIcon}>
                  <img src={iconClick} alt="External link" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
