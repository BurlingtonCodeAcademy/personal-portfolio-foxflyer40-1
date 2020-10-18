import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Interests from './components/Interests.js'
import Career from './components/Career.js'
import Footer from './components/Footer'


function App() {

    return (
        <Router>
            <div id="container">
                <Header />
                <div id='mainContainer'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/interests' component={Interests} />
                        <Route path='/career' component={Career} />
                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
