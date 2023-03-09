import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Tutorial from '../Tutorial/Tutorial';

const Home = () => {
    return (
        <div>
            <About></About>
            <Projects></Projects>
            <ProfessionalSkills></ProfessionalSkills>
            <Portfolio></Portfolio>
            <Services></Services>
            <Tutorial></Tutorial>
            <Contact></Contact>
        </div>
    );
};

export default Home;