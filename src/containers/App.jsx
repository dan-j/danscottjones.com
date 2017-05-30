import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import BlogPageContainer from './BlogPageContainer';

const App = () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/blog/:slug" component={BlogPageContainer} />
        </div>
    </BrowserRouter>
);

export default App;
