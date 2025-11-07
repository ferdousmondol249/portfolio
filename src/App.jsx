import React from 'react';
import Header from './Component/header.jsx';
import Footer from './Component/Footer.jsx';

import Hero from './Component/Hero.jsx';
import Skill from './Component/Skill.jsx';
import Project from './Component/Project.jsx';
import MyExperience from './Component/MyExperience.jsx';
import GetTouch from './Component/GetTouch.jsx';

function App() {
  return (
    <>
      <Header />
      <section id="top">
        <Hero/>
      </section>
      <section id="skills">
        <Skill/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="experience">
        <MyExperience/>
      </section>
      <section id="contact">
        <GetTouch/>
      </section>
      <Footer />
    </>
  );
}

export default App;