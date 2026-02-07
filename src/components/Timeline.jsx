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
        date: 'Sep 2022',
        title: 'Publication: Ataques de Frequência em Deduplicação Cifrada na Nuvem',
        institution: 'Inforum',
        institutionFull: 'Simpósio de Informática (Guarda, Portugal)',
        description: 'R. Silva, C. Correia, M. Correia and L. Rodrigues.',
        icon: '📄',
        link: 'https://web.ist.utl.pt/claudio.correia/papers/inforum22-silva.pdf'
    },
    {
        id: 4,
        date: '2022 - Present',
        title: 'Backend Developer',
        institution: 'Sky',
        institutionFull: 'Sky Portugal',
        description: 'Working on backend services and mentoring summer interns. Building scalable solutions for media streaming.',
        icon: '💼'
    },
    {
        id: 5,
        date: 'Mar 2023',
        title: 'Publication: Deduplication vs Privacy Tradeoffs in Cloud Storage',
        institution: 'ACM SAC',
        institutionFull: 'Symposium On Applied Computing (Tallinn, Estonia)',
        description: 'R. Silva, C. Correia, M. Correia and L. Rodrigues.',
        icon: '📄',
        link: 'https://dl.acm.org/doi/10.1145/3555776.3577711'
    }
];

function Timeline() {
    return (
        <section id="timeline" className="timeline-section">
            <header className="major">
                <h2>My Journey</h2>
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
                            <h3 className="timeline-title">
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                ) : (
                                    item.title
                                )}
                            </h3>
                            <h4 className="timeline-institution">
                                <a
                                    href={
                                        item.institution === 'ISEL' ? 'https://www.isel.pt/' :
                                            item.institution === 'IST' ? 'https://tecnico.ulisboa.pt/en/' :
                                                item.institution === 'Sky' ? 'https://www.linkedin.com/company/skyportugal' :
                                                    item.link || '#'
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
