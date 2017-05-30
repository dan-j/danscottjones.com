import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogEntry = ({ title, body, slug }) => (
    <div style={{
        margin: '2em',
        backgroundColor: 'white',
        padding: '1em',
    }}
    >
        <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{body}</p>
        </Link>
    </div>
);

BlogEntry.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default BlogEntry;
