import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <Link to="/"><h1>danscottjones.com</h1></Link>
        <p>The blog of a travelling coder</p>
    </nav>
);

export default Navigation;
