import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://github.com/RodrasSilva" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-silva-b9b812176/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" />
                </a>
                <a href="https://medium.com/@rodrigo-silva96" aria-label="Medium" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium" />
                </a>
            </div>
            <span className="footer-copy">© Rodrigo Silva</span>
        </footer>
    );
}

export default Footer;
