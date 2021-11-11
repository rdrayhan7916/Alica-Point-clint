
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth'
import { Box } from '@mui/system';

const Header = () => {
    const { user, logOut } = useAuth()


    return (
        <div className="">
            <Navbar bg="danger" variant="dark">
                <Container>

                    <Navbar.Brand className="me-5" to="home"><h2>Alica <span className="text-warning">Point</span></h2></Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link><Link className="link" to="home"> Home</Link></Nav.Link>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white', margin: '2' }} to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                    <Button sx={{ bgcolor: 'error.main' }} onClick={logOut} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white', marginTop: '2' }} to="/login">
                                    Login
                                </NavLink>
                        }

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;