import * as React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

export class EmployeeForm extends React.Component {
    render() {
        return (
            <LocalForm
                getDispatch={(dispatch) => this.formDispatch = dispatch}
                onSubmit={e => {
                    this.props.save(e);
                    this.formDispatch(actions.reset('local'));
                    this.formDispatch(actions.setInitial('local'));
                }}
            >
                <FormGroup>
                    <ControlLabel>Фамилия</ControlLabel>
                    <Control.text model=".surname" type="text" required component={FormControl} />
                    <ControlLabel>Имя</ControlLabel>
                    <Control.text model=".firstName" type="text" required component={FormControl} />
                    <ControlLabel>Отчество</ControlLabel>
                    <Control.text model=".lastName" type="text" required component={FormControl} />
                    <ControlLabel>Дата рождения</ControlLabel>
                    <Control.input model=".birthday" type="date" required component={DatePickerWrapper} />
                    <ControlLabel>Подразделение</ControlLabel>
                    <Control.select model=".division" type="text" defaultValue={this.props.divisionValues[0]} required componentClass="select" component={FormControl} >
                        {this.props.divisionValues.map(value =>
                            <option key={value} value={value}>{value}</option>
                        )}
                    </Control.select>
                    <ControlLabel>Должность</ControlLabel>
                    <Control.select model=".position" type="text" defaultValue={this.props.positionValues[0]} required componentClass="select" component={FormControl} >
                        {this.props.positionValues.map(value =>
                            <option key={value} value={value}>{value}</option>
                        )}
                    </Control.select>
                    <ControlLabel>Табельный номер</ControlLabel>
                    <Control.text model=".personalNumber" type="number" required component={FormControl} />
                </FormGroup>
                <Button type="submit">Сохранить</Button>
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