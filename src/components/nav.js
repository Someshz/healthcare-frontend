import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,NavLink,Navbar,NavbarToggler,Collapse,NavbarBrand,NavItem} from 'reactstrap';
import photo from "./hospitalimg.png";
function Rav()
{
    return(
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hospitals In City XYZ</NavbarBrand>
        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink>
          <Link to='/register'><li>Register New Hospital</li></Link> 
          </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
            <Link to='/hospitals'><li>Hospitals In The City</li> </Link>
            </NavLink>
            </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        
        </div>
    );
}

export default Rav;