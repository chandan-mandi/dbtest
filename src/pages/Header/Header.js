import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'

const Header = () => {
    const { user, logout, signInUsingGoogle } = useFirebase();

    console.log(user);
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Green Chilli</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                            <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>

                            {!user?.email ?
                                <>
                                    <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                                </>
                                : <span className="user-photo">
                                    <Link to="/login"><img src={user.photoURL} alt="" /></Link>
                                    {/* {user.email} */}
                                </span>
                            }
                        </Nav>
                        <Navbar.Text>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;