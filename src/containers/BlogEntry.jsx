import React from 'react';
import { Link } from 'react-router-dom';

const BlogEntry = ({ title, body, slug }) => (
    <div style={{
        margin: '2em',
        backgroundColor: 'white',
        padding: '1em',
    }}>
        <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{body}</p>
        </Link>
    </div>
);

export default BlogEntry;
