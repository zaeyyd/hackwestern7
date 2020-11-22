import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .navlink {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">DRIVECAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/drive-test">Drive Test</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/leaderboard">Leaderboard</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/personal-stats">Personal Stats</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </Styles>
)