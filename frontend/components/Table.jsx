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
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map(employee =>
                        <tr>
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
                        </tr>
                    )}
                </tbody>
            </BootstrapTable>
        )
    }
}