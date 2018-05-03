import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { EmployeeFormContainer } from '../containers/EmployeeFormContainer';

export class AddEmployeePage extends React.Component {
    render() {
        return (
            <Grid>
                <Row >
                    <Col sm={12} md={3}>
                        <EmployeeFormContainer />
                    </Col>
                </Row>
            </Grid>
        );
    }
}