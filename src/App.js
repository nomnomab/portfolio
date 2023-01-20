import './App.css';
import Home from "./chunks/home";
import Experience from "./chunks/experience";
import Projects from "./chunks/projects";

import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import itchIcon from './assets/icons/itch.svg';

function App() {
  return (
    <>
      <Home id="about" />
      <Projects id="projects" />
      <Experience id="experience" />

      <div id="footer">
        <div className='socials'>
            <a href='https://github.com/nomnomab' target='new'><img src={githubIcon} alt="github" /></a>
            <a href='https://www.linkedin.com/in/andrew-burke-675337167/' target='new'><img src={linkedinIcon} alt="linkedin" /></a>
            <a href='https://nomnomdev.itch.io/' target='new'><img src={itchIcon} alt="itch" /></a>
        </div>

        <a href='/#about'>About</a>
        <a href='/#projects'>Projects</a>
        <a href='/#experience'>Experience</a>

        <div style={{marginTop: '1rem'}} />
        <p>Icons provided by <a href='https://icons8.com/'>Icons8</a></p>
        <p>© 2023 Andrew Burke</p>
      </div>
    </>
  );
}

export default App;
