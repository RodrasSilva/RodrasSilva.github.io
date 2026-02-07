import React, { useEffect, useRef } from 'react';

function Header({ footer }) {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 980 && headerRef.current) {
                const scrollPosition = window.scrollY;
                headerRef.current.style.backgroundPosition = `left ${-1 * (scrollPosition / 20)}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" ref={headerRef}>
            <div className="inner">
                <img className="image avatar" src="/images/avatar-summer.jpeg" alt="Rodrigo Silva - Backend Developer" />
                <h1>
                    <strong> Hello, I'm Rodrigo Silva </strong>
                    <br />
                    Lisbon, Portugal 🇵🇹
                    <br />
                    Backend developer at <a href="https://www.linkedin.com/company/skyportugal">Sky</a>
                    <br />
                    BSc in Computer Science and <br /> Engineering at <a href="https://www.isel.pt/">ISEL</a>
                    <br />
                    MSc in Computer Science and <br /> Engineering at <a href="https://tecnico.ulisboa.pt/en/">IST</a>
                </h1>
            </div>
            {footer}
        </header>
    );
}

export default Header;
