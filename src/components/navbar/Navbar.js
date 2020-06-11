import React from 'react';
import './Navbar.css';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';

const navbar = (props) => {
    return(
        <div>
            <Navbar>
                <NavbarBrand href='/'>Indy Hikes</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default navbar;