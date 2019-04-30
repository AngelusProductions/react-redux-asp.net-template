import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            Home
                         </NavItem>
                    </LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer to={'/tables'}>
                        <NavItem>
                            Tables
                        </NavItem>
                    </LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer to={'/forms'}>
                        <NavItem>
                            Forms
                        </NavItem>
                    </LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer to={'/visualizations'}>
                        <NavItem>
                            Visualizations
                        </NavItem>
                    </LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer to={'/users/:id'}>
                        <NavItem>
                            Me
                        </NavItem>
                    </LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer to={'/signin'}>
                        <NavItem>
                            Sign In
                        </NavItem>
                    </LinkContainer>
                </li>
            </ul>
        </div>
    </nav>
);
