import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => (
    <header className="app-header">
    <ul className="container">
        <li key="home"><Link to="/">Home Page</Link></li>
        {props.isAuthenticated ? (
        <>
        <li><Link to="/new">New Post</Link></li>
        <li><button className="linkLike" onClick={e => {e.preventDefault(); props.onLogout(); }}>Logout</button></li>
        </>
        ) : (
        <li><Link to="/login">Login</Link></li>
        )}
    </ul>
</header>
);

export default Header;