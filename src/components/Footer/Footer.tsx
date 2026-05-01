import React from 'react';
import type { ContactInfo } from '../../types/portfolio';
import styles from './Footer.module.css';
import asset24 from '../../assets/footer/asset24.png';
import asset23 from '../../assets/footer/asset23.png';
// import star from '../../assets/footer/star.png';
import vector12 from '../../assets/footer/vector12.svg';
import socialIcons from '../../assets/footer/social-icons.svg';

interface FooterProps {
  contact: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer className={styles.footer}>
      {/* Background decorative elements */}
      <div className={styles.backgroundDecor}>
        <img src={asset24} alt="" className={styles.asset24} />
        <img src={asset23} alt="" className={styles.asset23} />
        <img src={vector12} alt="" className={styles.vector12} />
        {/* <img src={star} alt="" className={styles.star} /> */}
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Contact</h2>
          
          <div className={styles.description}>
            <p>I'm currently looking to join a cross-functional team that values improving people's lives</p>
            <p>through accessible design. or have a project in mind? Let's connect.</p>
            <p className={styles.email}>{contact.email || 'awscloudclub@gmail.com'}</p>
          </div>
          
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <img src={socialIcons} alt="Social media links" />
          </div>
        </div>
      </div>
    </footer>
  );
};
