import * as React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

export class Table extends React.Component {
    render() {
        return (
            <BootstrapTable responsive >
                <thead>
                    <tr>
                        {Object.values(this.props.employeeFields).map(p => p.visible ?
                            <th key={p.fieldName}>{p.fieldName}</th> : undefined)
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map(employee =>
                        <tr>
                            {
                                Object.entries(employee).map(([key, value]) =>
                                    this.props.employeeFields[key].visible ?
                                        <td >{value}</td> : undefined)
                            }
                        </tr>
                    )}
                </tbody>
            </BootstrapTable>
        )
    }
}