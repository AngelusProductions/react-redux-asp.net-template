import React from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/NavMenu.css';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto index-nav-items">
                <div className="nav-item">
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            Home
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/tables'} >
                        <NavItem >
                            Tables
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/forms'}>
                        <NavItem>
                            Forms
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/visualizations'}>
                        <NavItem>
                            Visualizations
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/users/:id'}>
                        <NavItem>
                            Me
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/signin'}>
                        <NavItem>
                            Sign In
                        </NavItem>
                    </LinkContainer>
                </div>
            </div>
        </div>
    </nav>
);
