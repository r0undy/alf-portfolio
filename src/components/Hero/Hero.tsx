import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import profileImage from '../../assets/hero/profile.png';
import gradientBg from '../../assets/hero/gradient.svg';
import arrowDecor from '../../assets/hero/arrow.svg';
import ellipse5 from '../../assets/hero/ellipse5.svg';
import ellipse3 from '../../assets/hero/ellipse3.svg';
import vector11 from '../../assets/hero/vector11.svg';
import vector9 from '../../assets/hero/vector9.svg';
import starClean from '../../assets/hero/star-clean.png';

interface HeroProps {
  name?: string;
  tagline?: string;
}

export const Hero: React.FC<HeroProps> = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "I'm a Developer.|";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section className={styles.hero} role="region" aria-label="Hero section">
      {/* Background decorative elements */}
      <div className={styles.decorativeBackground}>
        <img src={vector11} alt="" className={styles.vector11} />
        <img src={vector9} alt="" className={styles.vector9} />
        <img src={starClean} alt="" className={styles.decoration1} />
      </div>
      
      {/* Gradient background */}
      <div className={styles.gradientContainer}>
        <img src={gradientBg} alt="" className={styles.gradient} />
      </div>
      
      {/* Main content container */}
      <div className={styles.content}>
        {/* Greeting text */}
        <div className={styles.greeting}>
          <p>Hello! I Am <span className={styles.nameHighlight}>Rhandie</span></p>
        </div>
        
        {/* Profile section */}
        <div className={styles.profileSection}>
          <div className={styles.profileContainer}>
            <img src={ellipse3} alt="" className={styles.profileBg} />
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
          </div>
          
          {/* Arrow decoration */}
          <div className={styles.arrowContainer}>
            <img src={arrowDecor} alt="" className={styles.arrow} />
          </div>
        </div>
        
        {/* Description section */}
        <div className={styles.descriptionSection}>
          <p className={styles.subtitle}>A Developer who</p>
          <div className={styles.mainHeading}>
            <p>Judges a book</p>
            <p>by its <span className={styles.coverHighlight}>cover</span>...</p>
          </div>
          <p className={styles.subtext}>Because if the cover does not impress you what else can?</p>
          
          {/* Ellipse decoration */}
          <div className={styles.ellipseContainer}>
            <img src={ellipse5} alt="" className={styles.ellipse5} />
          </div>
        </div>
        
        {/* Who Am I section */}
        <div className={styles.whoAmISection}>
          <h1 className={styles.title}>{typewriterText}</h1>
          <p className={styles.designation}>Currently, I'm the Frontend Lead at  AWS Cloud Club PUP,</p>
        </div>
        
        {/* Bio section */}
        <div className={styles.bioSection}>
          <p>A self-taught developer, functioning in the industry for 3+ years now.</p>
          <p>I make meaningful and delightful digital products that create an equilibrium</p>
          <p>between user needs and business goals.</p>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className={styles.decorativeElements}>
        <img src={starClean} alt="" className={styles.decoration2} />
        <img src={starClean} alt="" className={styles.decoration3} />
      </div>
    </section>
  );
};
