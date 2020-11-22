import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

export const PersonalStats = () => (
    <div>
        <h2>My profile</h2>
        <p>Lorem ipsum</p>

        <Container>
            <Row>
                <Col>
                    <h4>Score over time</h4>
                    <p>** TABLE AND USE CONTAINERS TO ORGANIZE **</p>                
                </Col>
                <Col>
                    <h4>Pass Rates by Challenges</h4>
                    <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Challenge</th>
                    <th>Pass Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yield Sign</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>Stop Sign</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>Blindspot</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>Traffic Light</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>Engine and Brake Management</td>
                    <td>25%</td>
                </tr>
            </tbody>
        </Table>
                </Col>
            </Row>
        </Container>
    </div>
)