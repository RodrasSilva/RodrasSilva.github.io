import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="top-nav">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
