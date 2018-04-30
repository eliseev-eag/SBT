import * as React from 'react';
import { Form, Control } from 'react-redux-form';

export class SettingsPage extends React.Component {
    render() {
        return (
            <Form model="settings" >
                <label htmlFor="settings.surname">Фамилия</label>
                <Control.checkbox model=".surname" id="settings.surname" />
                <label htmlFor="settings.firstName">Имя</label>
                <Control.checkbox model=".firstName" id="settings.firstName" />
                <label htmlFor="settings.lastName">Отчество</label>
                <Control.checkbox model=".lastName" id="settings.lastName" />
                <label htmlFor="settings.birthday">Дата рождения</label>
                <Control.checkbox model=".birthday" id="settings.birthday" />
            </Form>
        );
    }
}