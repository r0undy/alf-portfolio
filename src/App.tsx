import { Hero } from './components/Hero';
import { WorkExperience } from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero name={portfolioData.name} tagline={portfolioData.tagline} />
      <WorkExperience experiences={portfolioData.workExperience} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Footer contact={portfolioData.contact} />
    </div>
  );
}

export default App;
