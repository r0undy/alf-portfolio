import type { Skill } from '../../types/portfolio';
import styles from './Skills.module.css';
import icon1 from '../../assets/skills/icon1.png';
import icon2 from '../../assets/skills/icon2.png';
import icon3 from '../../assets/skills/icon3.png';
import icon4 from '../../assets/skills/icon4.png';
import icon5 from '../../assets/skills/icon5.png';
import icon6 from '../../assets/skills/icon6.png';
import icon7 from '../../assets/skills/icon7.png';
import icon8 from '../../assets/skills/icon8.png';
import icon9 from '../../assets/skills/icon9.png';
import icon10 from '../../assets/skills/icon10.png';
import icon11 from '../../assets/skills/icon11.png';
import icon12 from '../../assets/skills/icon12.png';
import icon13 from '../../assets/skills/icon13.png';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13];

const SkillItem = ({ skill, index }: SkillItemProps) => {
  const icon = icons[index % icons.length];
  
  return (
    <div className={`${styles.skillItem} ${styles[`skillItem${index}`]}`}>
      <div className={styles.skillCircle}>
        <img src={icon} alt={skill.name} className={styles.skillIcon} />
      </div>
    </div>
  );
};

export default SkillItem;
