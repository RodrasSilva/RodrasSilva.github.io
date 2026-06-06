import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const publications = [
    {
        year: '2023',
        title: 'Deduplication vs Privacy Tradeoffs in Cloud Storage',
        url: 'https://dl.acm.org/doi/10.1145/3555776.3577711',
        venue: 'ACM SAC · Tallinn, Estonia · Mar 2023',
        authors: 'R. Silva, C. Correia, M. Correia and L. Rodrigues',
    },
    {
        year: '2022',
        title: 'Ataques de Frequência em Deduplicação Cifrada na Nuvem',
        url: 'https://web.ist.utl.pt/claudio.correia/papers/inforum22-silva.pdf',
        venue: 'Inforum · Guarda, Portugal · Sep 2022',
        authors: 'R. Silva, C. Correia, M. Correia and L. Rodrigues',
    },
];

const recentPosts = blogData.slice(0, 2);

function Writing() {
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
        <section id="writing" className="section">
            <div className="section-inner fade-in" ref={innerRef}>
                <p className="section-label">Writing</p>
                <h2>Publications & Blog</h2>

                <div className="writing-sub">
                    <p className="writing-sub-label">Publications</p>
                    <div className="pub-list">
                        {publications.map(pub => (
                            <div key={pub.url} className="pub-item">
                                <span className="pub-year">{pub.year}</span>
                                <div>
                                    <p className="pub-title">
                                        <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                                    </p>
                                    <p className="pub-venue">{pub.venue}</p>
                                    <p className="pub-authors">{pub.authors}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="writing-sub">
                    <p className="writing-sub-label">Blog</p>
                    <div className="blog-cards">
                        {recentPosts.map(post => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
                                <p className="blog-meta">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="blog-title">{post.title}</p>
                                <p className="blog-excerpt">{post.description}</p>
                                <span className="blog-cta">Read more →</span>
                            </Link>
                        ))}
                    </div>
                    <Link to="/blog" className="view-all-link">View all posts →</Link>
                </div>
            </div>
        </section>
    );
}

export default Writing;
