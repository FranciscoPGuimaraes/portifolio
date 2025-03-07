import React from 'react';
import Header from 'src/components/header';
import About from 'src/components/about';
import Experience from 'src/components/experience';
import Projects from 'src/components/projects';
import Contact from 'src/components/contact';
import './index.css';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
