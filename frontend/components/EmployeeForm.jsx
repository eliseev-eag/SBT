import * as React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(value) {
        this.props.save(value);
        this.formDispatch(actions.reset('local'));
        this.formDispatch(actions.setInitial('local'));
    }

    render() {
        return (
            this.props.readOnly && !this.props.selectedEmployee ? null :

                <LocalForm
                    getDispatch={(dispatch) => this.formDispatch = dispatch}
                    onSubmit={this.formSubmit}
                >
                    <FormGroup>
                        <ControlLabel>{this.props.fields.surname.fieldName}</ControlLabel>
                        <Control.text model=".surname" type="text" required readOnly={this.props.readOnly} component={FormControl} />
                        <ControlLabel>{this.props.fields.firstName.fieldName}</ControlLabel>
                        <Control.text model=".firstName" type="text" required readOnly={this.props.readOnly} component={FormControl} />
                        <ControlLabel>{this.props.fields.lastName.fieldName}</ControlLabel>
                        <Control.text model=".lastName" type="text" required readOnly={this.props.readOnly} component={FormControl} />
                        <ControlLabel>{this.props.fields.birthday.fieldName}</ControlLabel>
                        <Control.input model=".birthday" type="date" required readOnly={this.props.readOnly}
                            component={this.props.readOnly ? FormControl : DatePickerWrapper} />
                        <ControlLabel>{this.props.fields.division.fieldName}</ControlLabel>
                        <Control.select model=".division" type="text"
                            defaultValue={this.props.divisionValues[0]} readOnly={this.props.readOnly}
                            required componentClass="select" component={FormControl} >
                            {this.props.divisionValues.map(value =>
                                <option key={value} value={value}>{value}</option>
                            )}
                        </Control.select>
                        <ControlLabel>{this.props.fields.position.fieldName}</ControlLabel>
                        <Control.select model=".position" type="text"
                            defaultValue={this.props.positionValues[0]} readOnly={this.props.readOnly}
                            required componentClass="select" component={FormControl} >
                            {this.props.positionValues.map(value =>
                                <option key={value} value={value}>{value}</option>
                            )}
                        </Control.select>
                        <ControlLabel>{this.props.fields.personalNumber.fieldName}</ControlLabel>
                        <Control.text model=".personalNumber" type="number" readOnly={this.props.readOnly} required component={FormControl} />
                    </FormGroup>
                    {this.props.readOnly ?
                        <Button type="submit">Сохранить</Button>
                        : undefined}
                </LocalForm>
        );
    }
}

const DatePickerWrapper = (props) => (
    <DatePicker
        props
        dateFormat="DD.MM.YYYY"
        timeFormat={null}
        onChange={e => {
            if (e.format) {
                const formattedValue = e.format("DD.MM.YYYY");
                props.onChange(formattedValue);
            }
            else {
                props.onChange(e);
            }
        }}
    />)