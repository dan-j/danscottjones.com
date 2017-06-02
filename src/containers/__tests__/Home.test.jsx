import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Home from '../Home';

jest.mock('../../services/contentfulClient', () => ({
    // eslint-disable-next-line global-require
    getEntries: () => require('./data/BlogPost').default.entries,
}));

test('<Home /> loads blogPost entries', (done) => {
    const component = renderer.create(
        <MemoryRouter>
            <Home />
        </MemoryRouter>,
    );

    expect(component.toJSON()).toMatchSnapshot();

    process.nextTick(() => {
        expect(component.toJSON()).toMatchSnapshot();
        done();
    });
});
