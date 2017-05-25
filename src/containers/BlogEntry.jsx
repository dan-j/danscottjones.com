import React from 'react';

const BlogEntry = ({title, body}) => (
    <div style={{
        margin: '2em',
        backgroundColor: 'white',
        padding: '1em',
    }}>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
);

export default BlogEntry;
