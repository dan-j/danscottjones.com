jest.mock('../services/contentfulClient', () => ({
    getEntries: () => {
        return require('./data/BlogPost').entries;
    },
}));

import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Home from '../containers/Home';

test('<Home /> loads blogPost entries', done => {
    const component = renderer.create(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();

    process.nextTick(() => {
        expect(component.toJSON()).toMatchSnapshot();
        done();
    });

});
