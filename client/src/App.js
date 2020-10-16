import React, { useEffect, useClass } from 'react';
import './App.css';
import About from './components/About.js'
import Projects from './components/Projects.js'
import Interests from './components/Interests.js'
import Career from './components/Career.js'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div id="container">

            <Header />
            <About />
            <Projects />
            <Interests />
            <Career />
            <Footer />

            
        </div>
    );
}

export default App;
