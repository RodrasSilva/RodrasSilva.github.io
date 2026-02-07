import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="inner not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <ul className="actions">
                <li>
                    <Link to="/" className="button primary">
                        Go Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className="button">
                        Visit Blog
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NotFound;
