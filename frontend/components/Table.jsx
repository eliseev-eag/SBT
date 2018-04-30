import * as React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

export class Table extends React.Component {
    render() {
        return (
            <BootstrapTable responsive >
                <thead>
                    <tr>
                        {
                            this.props.settings.surname ?
                                <th>Фамилия</th> : undefined
                        }
                        {
                            this.props.settings.firstName ?
                                <th>Имя</th> : undefined
                        }
                        {
                            this.props.settings.lastName ?
                                <th>Отчество</th> : undefined
                        }
                        {
                            this.props.settings.birthday ?
                                <th>Дата рождения</th> : undefined
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map(p =>
                            <tr key={p}>
                                {
                                    this.props.settings.surname ?
                                        <td>Иванов</td> : undefined
                                }
                                {
                                    this.props.settings.firstName ?
                                        <td>Иван</td> : undefined
                                }
                                {
                                    this.props.settings.lastName ?
                                        <td>Иванович</td> : undefined
                                }
                                {
                                    this.props.settings.birthday ?
                                        <td>17.03.1992</td> : undefined
                                }
                            </tr>
                        )
                    }
                </tbody>
            </BootstrapTable>
        )
    }
}