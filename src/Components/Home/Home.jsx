import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Skills from '../Skill/Skills';
import Projects from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;