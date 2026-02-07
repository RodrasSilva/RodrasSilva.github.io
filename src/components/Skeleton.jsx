import React from 'react';
import './Skeleton.css';

function Skeleton({ type = 'text', count = 1, width, height }) {
    const skeletons = Array(count).fill(null);

    const getClassName = () => {
        switch (type) {
            case 'title':
                return 'skeleton skeleton-title';
            case 'text':
                return 'skeleton skeleton-text';
            case 'paragraph':
                return 'skeleton skeleton-paragraph';
            case 'avatar':
                return 'skeleton skeleton-avatar';
            default:
                return 'skeleton skeleton-text';
        }
    };

    const style = {
        ...(width && { width }),
        ...(height && { height })
    };

    return (
        <div className="skeleton-wrapper">
            {skeletons.map((_, index) => (
                <div
                    key={index}
                    className={getClassName()}
                    style={style}
                />
            ))}
        </div>
    );
}

export function BlogPostSkeleton() {
    return (
        <div className="blog-skeleton">
            <Skeleton type="title" width="60%" />
            <Skeleton type="text" width="30%" />
            <div style={{ marginTop: '2rem' }}>
                <Skeleton type="paragraph" count={3} />
                <Skeleton type="paragraph" width="80%" />
                <Skeleton type="paragraph" count={2} />
                <Skeleton type="paragraph" width="60%" />
            </div>
        </div>
    );
}

export default Skeleton;
