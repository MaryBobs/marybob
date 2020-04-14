import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="app-header">
        <ul className="container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog" >Blog</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
        </ul>
    </header>
)

export default Header;