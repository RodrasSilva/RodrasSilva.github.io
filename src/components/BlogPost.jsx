import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blogData } from '../data/blogData';

function BlogPost() {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const post = blogData.find(p => p.id === id);

    useEffect(() => {
        if (!post) return;

        fetch(post.contentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load post content');
                }
                return response.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [post]);

    if (!post) return <div className="inner"><h2>Post not found</h2><Link to="/blog" className="button">Back to Blog</Link></div>;

    if (loading) return <div className="inner"><h2>Loading...</h2></div>;
    if (error) return <div className="inner"><h2>Error: {error}</h2><Link to="/blog" className="button">Back to Blog</Link></div>;

    return (
        <div className="inner">
            <Link to="/blog" className="button small" style={{ marginBottom: '2rem' }}>&larr; Back to Blog</Link>
            <article className="box post post-excerpt">
                <header>
                    <h2>{post.title}</h2>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                </header>
                <div style={{ textAlign: 'left' }}>
                    <ReactMarkdown
                        components={{
                            code({ inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={prism}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}

export default BlogPost;
