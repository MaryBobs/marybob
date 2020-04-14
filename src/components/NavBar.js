import React from 'react';
import {Link} from 'react-router-dom';
import Beach from '../images/beach.JPG';
import Shore from "../images/shore.JPG";
import Duck from "../images/duck.png";

const NavBar = () => (
    <header className="app-header">
        {/* <h1 className="nav-name">MARY CUMMINGS</h1> */}
        <ul className="container">
            <li><Link to="/" className="link"><img src={Duck} className="nav-image"/>:ABOUT</Link></li>
            <li><Link to="/blog" className="link"><img src={Beach} className="nav-image"/>:BLOG</Link></li>
            <li><Link to="/projects" className="link"><img src={Shore} className="nav-image"/>:PROJECTS</Link></li>
        </ul>
    </header>
)

export default NavBar;