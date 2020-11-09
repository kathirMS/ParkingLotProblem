import react from  'react';
import React, { Component }  from 'react';
import {Navbar,Nav} from  'react-bootstrap';
import {Link} from 'react-router-dom';
export default class NavigationBar extends Component{
 render() {
     return (
         <Navbar bg="primary" variant="dark">
             <Link to={""} className="navbar-brand">
                 Parking
             </Link>

             <Nav className="mr-auto">
                 <Link to={"add"} className="nav-link">Park Your Vehicle</Link>
                 <Link to={"unadd"} className="nav-link">UnPark Your Vehicle</Link>
                 <Link to={"list"} className="nav-link">Display Parking List</Link>
                 <Link to={"cust"} className="nav-link">Display Customer List</Link>
             </Nav>
         </Navbar>
       );
 }
}