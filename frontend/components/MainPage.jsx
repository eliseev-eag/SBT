import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from './Table';

export class MainPage extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row >
                    <Col sm={12} md={9}>
                        <Table />
                    </Col>
                    <Col sm={12} md={3}>
                    </Col>
                </Row>
            </Grid>
        )
    }
}