import React, {Component} from 'react';
// import HomePageContainer from './containers/HomePageContainer';
import Blog from './containers/Blog';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    {/* MAIN */}
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


export default App;