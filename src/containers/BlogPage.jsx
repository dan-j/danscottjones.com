import React from 'react';
import PropTypes from 'prop-types';

const BlogPage = ({ title, body }) => (
    <section style={{
        margin: '2em',
        backgroundColor: 'white',
        padding: '1em',
    }}>
        <h2>{title}</h2>
        <p>{body}</p>
    </section>
);

BlogPage.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default BlogPage;
