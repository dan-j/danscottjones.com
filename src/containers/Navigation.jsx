import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './_Navigation.scss';

const Navigation = () => (
    <nav styleName="nav">
        <div styleName="nav-content">
            <Link to="/"><h1>danscottjones.com</h1></Link>
            <p>The blog of a travelling coder</p>
        </div>
    </nav>
);

export default CSSModules(Navigation, styles);
