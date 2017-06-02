import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement,
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
