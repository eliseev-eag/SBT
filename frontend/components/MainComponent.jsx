import * as React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { EmployeeListPage } from './EmployeeListPage';
import { Header } from './Header';
import { SettingsPage } from './SettingsPage';
import {AddEmployeePage} from './AddEmployeePage';

export class MainComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch >
                    <Route path="/list" component={EmployeeListPage} />
                    <Route path="/add" component={AddEmployeePage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Redirect to="/list" />
                </Switch>
            </React.Fragment>
        );
    }
}