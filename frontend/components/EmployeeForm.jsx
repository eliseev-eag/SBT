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
                    console.log(e);
                    this.props.save(e);
                    this.formDispatch(actions.reset('local'));
                    this.formDispatch(actions.setInitial('local'));
                }}
            >
                <FormGroup>
                    <ControlLabel>Фамилия</ControlLabel>
                    <Control.text model=".surname" type="text" component={FormControl} />
                    <ControlLabel>Имя</ControlLabel>
                    <Control.text model=".firstName" type="text" component={FormControl} />
                    <ControlLabel>Отчество</ControlLabel>
                    <Control.text model=".lastName" type="text" component={FormControl} />
                    <ControlLabel>Дата рождения</ControlLabel>
                    <Control.input model=".birthday" defaultValue="" type="date" component={DatePickerWrapper} />
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
            const formattedValue = e.format("DD.MM.YYYY");
            props.onChange(formattedValue);
        }}
    />)