import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MainComponent } from './components/MainComponent';
import './styles/shared-styles.less'

ReactDOM.render(
    <AppContainer>
        <MainComponent />
    </AppContainer>,
    document.getElementById('react-container')
);