import React from 'react';

function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a href="https://github.com/RodrasSilva" className="icon brands fa-github" aria-label="Visit my GitHub profile"><span className="label">Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/rodrigo-silva-b9b812176/" className="icon brands fa-linkedin" aria-label="Connect with me on LinkedIn"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://medium.com/@rodrigo-silva96" className="icon brands fa-medium" aria-label="Read my articles on Medium"><span className="label">Medium</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Rodrigo Silva</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
