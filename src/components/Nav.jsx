import React, { useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Nav() {
    const navRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => navRef.current?.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleSectionLink = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    return (
        <nav className="nav" ref={navRef}>
            <a href="/" className="nav-brand" onClick={e => handleSectionLink(e, 'hero')}>
                Rodrigo Silva
            </a>
            <ul className="nav-links">
                <li><a href="#about" onClick={e => handleSectionLink(e, 'about')}>About</a></li>
                <li><a href="#journey" onClick={e => handleSectionLink(e, 'journey')}>Journey</a></li>
                <li><a href="#writing" onClick={e => handleSectionLink(e, 'writing')}>Writing</a></li>
                <li>
                    <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? '☀' : '◑'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
