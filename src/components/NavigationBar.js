import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
        font-size: large;
    }

    .navbar-brand, .navbar-nav .navlink {
        color: #5C7A5B;

        &:hover {
            color: #222;
        }
    }

    .dot {
        height: 20px;
        width: 20px;
        background-color: #5C7A5B;
        border-radius: 50%;
        display: inline-block;
    }
`;

export const NavigationBar = () => (
    <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    &nbsp; DRIVECAR
                    </Navbar.Brand>
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