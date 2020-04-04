import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <article className="not-found container">
        <h1>404!</h1>
        <p>Sorry, I could not find that page.</p>     
        <p><Link to="/">Return to home page</Link></p>
    </article>
);

export default NotFound;