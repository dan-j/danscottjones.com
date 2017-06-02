import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Navigation from './Navigation';
import Home from './Home';
import BlogPageContainer from './BlogPageContainer';
import styles from './_App.scss';

const App = () => (
    <BrowserRouter>
        <div styleName="app">
            <Navigation />
            <div styleName="content">
                <Route path="/" exact component={Home} />
                <Route path="/blog/:slug" component={BlogPageContainer} />
            </div>
        </div>
    </BrowserRouter>
);

export default CSSModules(App, styles);
