import React from 'react';
import {Link} from 'react-router-dom';

const BlogHeader = props => (
    <header className="app-header">
    <ul className="container">
        <li key="home"><Link to="/blog">Home Page</Link></li>
        {props.isAuthenticated ? (
        <>
        <li><Link to="/blog/new">New Post</Link></li>
        <li><button className="linkLike" onClick={e => {e.preventDefault(); props.onLogout(); }}>Logout</button></li>
        </>
        ) : (
        <li><Link to="/blog/login">Login</Link></li>
        )}
    </ul>
</header>
);

export default BlogHeader;