import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import { MainComponent } from './components/MainComponent';
import './styles/shared-styles.less'

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <MainComponent />
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('react-container')
);