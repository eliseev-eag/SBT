import * as React from 'react';
import { Form, Control } from 'react-redux-form';
import { FormGroup, ControlLabel, Checkbox, Grid, PageHeader } from 'react-bootstrap';

export class SettingsPage extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader>
                    <small>Выберите колонки, которые будут отображаться в таблице "Список сотрудников"</small>
                </PageHeader>
                <Form model="employeeFields" >
                    <FormGroup>
                        <Control.checkbox model=".surname.visible" component={Checkbox} >
                            Фамилия
                        </Control.checkbox>
                        <Control.checkbox model=".firstName.visible" component={Checkbox} >
                            Имя
                        </Control.checkbox>
                        <Control.checkbox model=".lastName.visible" component={Checkbox} >
                            Отчество
                        </Control.checkbox>
                        <Control.checkbox model=".birthday.visible" component={Checkbox} >
                            Дата рождения
                        </Control.checkbox>
                    </FormGroup>
                </Form>
            </Grid>
        );
    }
}