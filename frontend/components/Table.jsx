import * as React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

export class Table extends React.Component {
    render() {
        return (
            <BootstrapTable responsive >
                <thead>
                    <tr>
                        {
                            this.props.employeeFields.surname.visible ?
                                <th>{this.props.employeeFields.surname.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.firstName.visible ?
                                <th>{this.props.employeeFields.firstName.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.lastName.visible ?
                                <th>{this.props.employeeFields.lastName.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.birthday.visible ?
                                <th>{this.props.employeeFields.birthday.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.division.visible ?
                                <th>{this.props.employeeFields.division.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.position.visible ?
                                <th>{this.props.employeeFields.position.fieldName}</th> : undefined
                        }
                        {
                            this.props.employeeFields.personalNumber.visible ?
                                <th>{this.props.employeeFields.personalNumber.fieldName}</th> : undefined
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map(employee =>
                        <tr key={employee.id} onClick={() => this.props.onSelectRow(employee.id)}>
                            {
                                this.props.employeeFields.surname.visible ?
                                    <td>{employee.surname}</td> : undefined
                            }
                            {
                                this.props.employeeFields.firstName.visible ?
                                    <td>{employee.firstName}</td> : undefined
                            }
                            {
                                this.props.employeeFields.lastName.visible ?
                                    <td>{employee.lastName}</td> : undefined
                            }
                            {
                                this.props.employeeFields.birthday.visible ?
                                    <td>{employee.birthday}</td> : undefined
                            }
                            {
                                this.props.employeeFields.division.visible ?
                                    <td>{employee.division}</td> : undefined
                            }
                            {
                                this.props.employeeFields.position.visible ?
                                    <td>{employee.position}</td> : undefined
                            }
                            {
                                this.props.employeeFields.personalNumber.visible ?
                                    <td>{employee.personalNumber}</td> : undefined
                            }
                        </tr>
                    )}
                </tbody>
            </BootstrapTable>
        )
    }
}