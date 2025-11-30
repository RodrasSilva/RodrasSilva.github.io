import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

function Blog() {
    return (
        <div className="inner">
            <h1>Blog</h1>
            <p>Check out my latest articles. You can find more in <a href="https://rodrigo-silva96.medium.com/">Medium</a>.</p>
            <div className="posts">
                {blogData.map((post) => (
                    <article key={post.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                        <header>
                            <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                            <p>{new Date(post.date).toLocaleDateString()}</p>
                        </header>
                        <p>{post.description}</p>
                        <ul className="actions">
                            <li><Link to={`/blog/${post.id}`} className="button">Read More</Link></li>
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blog;
