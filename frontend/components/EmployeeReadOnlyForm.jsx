import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export class EmployeeReadOnlyForm extends React.Component {
    render() {
        return (
            !this.props.selectedEmployee ? null :
                <FormGroup>
                    <ControlLabel>{this.props.fields.surname.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.surname} />
                    <ControlLabel>{this.props.fields.firstName.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.firstName} />
                    <ControlLabel>{this.props.fields.lastName.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.lastName} />
                    <ControlLabel>{this.props.fields.birthday.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.birthday} />
                    <ControlLabel>{this.props.fields.division.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.division} />
                    <ControlLabel>{this.props.fields.position.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.position} />
                    <ControlLabel>{this.props.fields.personalNumber.fieldName}</ControlLabel>
                    <FormControl readOnly value={this.props.selectedEmployee.personalNumber} />
                </FormGroup>
        );
    }
}