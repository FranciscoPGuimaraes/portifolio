import React from 'react';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
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
