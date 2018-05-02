import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { TableContainer } from '../containers/TableContainer';
import { EmployeeFormContainer } from '../containers/EmployeeFormContainer';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedEmployeeId: undefined }
    }

    render() {
        return (
            <Grid fluid>
                <Row >
                    <Col sm={12} md={9}>
                        <TableContainer onSelectRow={value => this.setState({ selectedEmployeeId: value })} />
                    </Col>
                    <Col sm={12} md={3}>
                        <EmployeeFormContainer readOnly selectedEmployeeId={this.state.selectedEmployeeId} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}