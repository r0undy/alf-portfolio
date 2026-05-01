import type { Project } from '../../types/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import gradient1 from '../../assets/projects/gradient1.svg';
import gradient2 from '../../assets/projects/gradient2.svg';
import gradient3 from '../../assets/projects/gradient3.svg';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projects}>
      {/* Background gradients */}
      <div className={styles.gradientContainer1}>
        <img src={gradient1} alt="" className={styles.gradient} />
      </div>
      <div className={styles.gradientContainer2}>
        <img src={gradient2} alt="" className={styles.gradient} />
      </div>
      <div className={styles.gradientContainer3}>
        <img src={gradient3} alt="" className={styles.gradient} />
      </div>
      
      <div className={styles.container}>
        {projects.length === 0 ? (
          <p className={styles.emptyState}>No projects to display</p>
        ) : (
          <div className={styles.projectsLayout}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
