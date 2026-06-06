import React, { useRef, useEffect } from 'react';

function About() {
    const innerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.disconnect(); } },
            { threshold: 0.08 }
        );
        if (innerRef.current) observer.observe(innerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section alt">
            <div className="section-inner fade-in" ref={innerRef}>
                <p className="section-label">Who I Am</p>
                <h2>About Me</h2>
                <div className="about-body">
                    <p>
                        Hello, I'm Rodrigo Silva. I studied Computer Science and Engineering for my Bachelor's degree at{' '}
                        <a href="https://www.isel.pt/" target="_blank" rel="noopener noreferrer">ISEL</a> and my Master's at{' '}
                        <a href="https://tecnico.ulisboa.pt/en/" target="_blank" rel="noopener noreferrer">IST</a>,
                        specialising in Software Engineering and Distributed Systems.
                    </p>
                    <p>
                        I currently work at <a href="https://www.linkedin.com/company/skyportugal" target="_blank" rel="noopener noreferrer">Sky Portugal</a> as
                        a Backend Developer, building scalable systems for media streaming. If you'd like to get in touch or request my CV,
                        feel free to reach out on <a href="https://www.linkedin.com/in/rodrigo-silva-b9b812176/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
