import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from './MainPage';
import { Header } from './Header';
import { SettingsPage } from './SettingsPage';
import { EmployeeFormContainer } from '../containers/EmployeeFormContainer';

export class MainComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch >
                    <Route path="/list" component={MainPage} />
                    <Route path="/add" component={EmployeeFormContainer} />
                    <Route path="/settings" component={SettingsPage} />
                    <Redirect to="/list" />
                </Switch>
            </React.Fragment>
        );
    }
}