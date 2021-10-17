import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './OurMenuHeader.css'

const OurMenuHeader = () => {
    return (
        <Container className="our-menu-header">
            <Nav.Link as={Link} to="/home#breakfast">All</Nav.Link>
            <NavLink
                to="/breakfast"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Breakfast
            </NavLink>
            <NavLink
                to="/lunch"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Lunch
            </NavLink>
            <NavLink
                to="/dinner"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Dinner
            </NavLink>
        </Container>
    );
};

export default OurMenuHeader;