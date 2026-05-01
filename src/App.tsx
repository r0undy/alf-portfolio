import { Hero } from './components/Hero';
import { WorkExperience } from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import Particles from './components/Particles/Particles';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="appBackground">
        <Particles
          particleColors={['#ffffff']}
          particleCount={500}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={70}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="appContent">
        <Hero name={portfolioData.name} tagline={portfolioData.tagline} />
        <WorkExperience experiences={portfolioData.workExperience} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Footer contact={portfolioData.contact} />
      </div>
    </div>
  );
}

export default App;
