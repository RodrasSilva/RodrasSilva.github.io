import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';
import { blogData } from '../data/blogData';
import { BlogPostSkeleton } from './Skeleton';

function BlogPost() {
    const { theme } = useTheme();
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const post = blogData.find(p => p.id === id);

    useEffect(() => {
        if (!post) return;
        fetch(post.contentPath)
            .then(r => { if (!r.ok) throw new Error('Failed to load post content'); return r.text(); })
            .then(text => { setContent(text); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, [post]);

    if (!post) return (
        <div className="blog-post-container">
            <h2>Post not found</h2>
            <Link to="/blog" className="blog-post-back">← All posts</Link>
        </div>
    );

    if (loading) return <div className="blog-post-container"><BlogPostSkeleton /></div>;
    if (error) return (
        <div className="blog-post-container">
            <h2>Error: {error}</h2>
            <Link to="/blog" className="blog-post-back">← All posts</Link>
        </div>
    );

    return (
        <div className="blog-post-container">
            <Link to="/blog" className="blog-post-back">← All posts</Link>
            <div className="blog-post-header">
                <h1>{post.title}</h1>
                <p className="blog-post-date">
                    {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
            <div className="blog-post-prose">
                <ReactMarkdown
                    components={{
                        code({ inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter style={theme === 'dark' ? vscDarkPlus : prism} language={match[1]} PreTag="div" {...props}>
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>{children}</code>
                            );
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
            {post.originalUrl && (
                <div className="blog-post-originally">
                    Originally published on <a href={post.originalUrl} target="_blank" rel="noopener noreferrer">Medium</a>.
                </div>
            )}
        </div>
    );
}

export default BlogPost;
