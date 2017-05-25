import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './Home';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
      <Home />
    </AppContainer>,
    rootElement,
);

if (module.hot) {
  module.hot.accept('./Home', () => {
    ReactDOM.render(
        <AppContainer>
          <Home />
        </AppContainer>,
        document.getElementById('root'),
    );
  });
}
