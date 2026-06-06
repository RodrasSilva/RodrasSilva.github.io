import React from 'react';

function getSeasonalAvatar() {
    const month = new Date().getMonth();
    if (month >= 5 && month <= 8) return '/images/avatar-summer.jpeg';
    if (month >= 2 && month <= 4) return '/images/avatar.jpeg';
    if (month >= 9 && month <= 10) return '/images/avatar-fall.jpg';
    return '/images/avatar-winter.jpeg';
}

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                    <img src={getSeasonalAvatar()} alt="Rodrigo Silva" />
                </div>
            </div>

            <p className="hero-eyebrow">Backend Developer · Lisbon, Portugal</p>

            <h1>Hello, I'm<br /><em>Rodrigo Silva</em></h1>

            <p className="hero-subtitle">
                Building backend systems at Sky Portugal. MSc in Computer Science from IST.
            </p>

            <div className="hero-socials">
                <a href="https://github.com/RodrasSilva" className="hero-social-pill" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-silva-b9b812176/" className="hero-social-pill" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" aria-hidden="true" /> LinkedIn
                </a>
                <a href="https://medium.com/@rodrigo-silva96" className="hero-social-pill" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium" aria-hidden="true" /> Medium
                </a>
            </div>

            <div className="hero-scroll-cue" aria-hidden="true">
                <div className="hero-scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    );
}

export default Hero;
