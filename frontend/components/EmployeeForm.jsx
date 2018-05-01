import * as React from 'react';
import { Form, Control } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class EmployeeForm extends React.Component {
    render() {
        return (
            <Form model="employees[employees.lenght]" onSubmit={this.props.save}>
                <FormGroup>
                    <ControlLabel>Фамилия</ControlLabel>
                    <Control.text model=".surname" type="text" component={FormControl} />
                    <ControlLabel>Имя</ControlLabel>
                    <Control.text model=".firstName" type="text" component={FormControl} />
                    <ControlLabel>Отчество</ControlLabel>
                    <Control.text model=".lastName" type="text" component={FormControl} />
                    <ControlLabel>Дата рождения</ControlLabel>
                    <Control.text model=".birthday" type="text" component={FormControl} />
                    <Button type="submit">Send invitation</Button>
                </FormGroup>
            </Form>
        );
    }
}