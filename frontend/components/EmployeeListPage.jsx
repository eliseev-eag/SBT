import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { EmployeeTableContainer } from '../containers/EmployeeTableContainer';
import { EmployeeReadOnlyFormContainer } from '../containers/EmployeeReadOnlyFormContainer';

export class EmployeeListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedEmployeeId: undefined }
    }

    render() {
        return (
            <Grid fluid>
                <Row >
                    <Col sm={12} md={9}>
                        <EmployeeTableContainer onSelectRow={value => this.setState({ selectedEmployeeId: value })} />
                    </Col>
                    <Col sm={12} md={3}>
                        <EmployeeReadOnlyFormContainer selectedEmployeeId={this.state.selectedEmployeeId} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}