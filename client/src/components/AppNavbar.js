import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { useModalState } from '../hooks/isOpen';

function  AppNavbar() {
    const { isOpen, toggle } = useModalState();
    return (
        <div className="">
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar/>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">PornHub</NavLink>
                            </NavItem>
                        </Nav>
                    <Collapse />
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavbar;