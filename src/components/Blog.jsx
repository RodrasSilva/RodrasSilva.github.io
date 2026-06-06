import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

function Blog() {
    return (
        <>
            <div className="blog-page-hero">
                <div className="section-inner">
                    <p className="section-label">Writing</p>
                    <h1>Blog</h1>
                    <p>Thoughts on software, systems, and engineering. More on <a href="https://rodrigo-silva96.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a>.</p>
                </div>
            </div>
            <div className="blog-page-cards">
                {blogData.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
                        <p className="blog-meta">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p className="blog-title">{post.title}</p>
                        <p className="blog-excerpt">{post.description}</p>
                        <span className="blog-cta">Read more →</span>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Blog;
