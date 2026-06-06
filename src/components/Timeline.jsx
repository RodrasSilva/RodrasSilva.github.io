import React, { useRef, useEffect } from 'react';

const timelineData = [
    {
        id: 1,
        date: '2017 – 2020',
        title: 'BSc Computer Science & Engineering',
        place: 'Instituto Superior de Engenharia de Lisboa (ISEL)',
        description: "Bachelor's degree focused on programming fundamentals, algorithms, databases, and software development.",
    },
    {
        id: 2,
        date: '2020 – 2022',
        title: 'MSc Computer Science & Engineering',
        place: 'Instituto Superior Técnico (IST)',
        description: "Master's degree specialising in Software Engineering and Distributed Systems. Published research on cloud storage security.",
    },
    {
        id: 3,
        date: '2022 – Present',
        title: 'Backend Developer',
        place: 'Sky Portugal',
        description: 'Building scalable backend services for media streaming and mentoring summer interns.',
        now: true,
    },
];

function Timeline() {
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
        <section id="journey" className="section alt">
            <div className="section-inner fade-in" ref={innerRef}>
                <p className="section-label">My Journey</p>
                <h2>Experience & Education</h2>
                <div className="timeline">
                    {[...timelineData].reverse().map(item => (
                        <div key={item.id} className="t-item">
                            <div className={`t-dot${item.now ? ' now' : ''}`} />
                            <p className="t-date">{item.date}</p>
                            <p className="t-title">{item.title}</p>
                            <p className="t-place">{item.place}</p>
                            <p className="t-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
