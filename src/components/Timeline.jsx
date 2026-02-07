import React from 'react';
import './Timeline.css';

const timelineData = [
    {
        id: 1,
        date: '2017 - 2022',
        title: 'BSc Computer Science & Engineering',
        institution: 'ISEL',
        institutionFull: 'Instituto Superior de Engenharia de Lisboa',
        description: 'Bachelor\'s degree focused on programming fundamentals, algorithms, databases, and software development.',
        icon: '🎓'
    },
    {
        id: 2,
        date: '2020 - 2022',
        title: 'MSc Computer Science & Engineering',
        institution: 'IST',
        institutionFull: 'Instituto Superior Técnico',
        description: 'Master\'s degree specializing in Software Engineering and Distributed Systems. Published research on cloud storage security.',
        icon: '🎓'
    },
    {
        id: 3,
        date: '2022 - Present',
        title: 'Backend Developer',
        institution: 'Sky',
        institutionFull: 'Sky Portugal',
        description: 'Working on backend services and mentoring summer interns. Building scalable solutions for media streaming.',
        icon: '💼'
    }
];

function Timeline() {
    return (
        <section id="timeline" className="timeline-section">
            <header className="major">
                <h2>Experience & Education</h2>
            </header>
            <div className="timeline timeline-compact">
                {timelineData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-content">
                            <span className="timeline-icon">{item.icon}</span>
                            <span className="timeline-date">{item.date}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <h4 className="timeline-institution">
                                <a
                                    href={
                                        item.institution === 'ISEL' ? 'https://www.isel.pt/' :
                                            item.institution === 'IST' ? 'https://tecnico.ulisboa.pt/en/' :
                                                'https://www.linkedin.com/company/skyportugal'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.institution}
                                </a>
                                <span className="institution-full"> - {item.institutionFull}</span>
                            </h4>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
