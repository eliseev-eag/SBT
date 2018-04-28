import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from './MainPage';
import { Header } from './Header';

export class MainComponent extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Switch >
                        <Route path="/list" component={MainPage} />
                        <Route path="/add" component={MainPage} />
                        <Route path="/settings" component={MainPage} />
                        <Redirect to="/list" />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}