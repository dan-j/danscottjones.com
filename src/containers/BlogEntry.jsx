import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './_BlogEntry.scss';

const BlogEntry = ({ title, body, slug }) => (
    <div styleName="blog-entry">
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

export default CSSModules(BlogEntry, styles);
