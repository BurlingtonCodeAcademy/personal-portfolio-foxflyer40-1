// import REACT and all components
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Interests from './components/Interests.js'
import Career from './components/Career.js'
import Footer from './components/Footer.js'
import Modal from './components/Modal.js'


function App() {
    const [modal, setModal] = useState(false)
    const handleModalOpen = () => {
        setModal(true)
        console.log(modal)
    }
    const handleModalClose = () => {
        setModal(false)
        console.log(modal)
    }
    return (
        <Router>
            <div id="container">
                <Header />
                <div id='mainContainer'>
                    <Switch>  {/* initialize react router to switch between components */}
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/interests' component={Interests} />
                        <Route path='/career' component={Career} />
                    </Switch>
                    {modal && <Modal closeModal={handleModalClose} />}
                </div>
                <Footer openModal={handleModalOpen} closeModal={handleModalClose} />
            </div>
        </Router>
    );
}

export default App;
