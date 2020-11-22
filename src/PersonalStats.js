import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                    <p>** TABLE AND USE CONTAINERS TO ORGANIZE **</p>
                </Col>
            </Row>
        </Container>
    </div>
)