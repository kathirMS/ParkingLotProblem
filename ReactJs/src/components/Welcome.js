import React, { Component }  from 'react';
import Parking from "./Parking";
import {Jumbotron, Button, Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
 export default class Welcome extends Component {
    render() {
        return (
                 <div >
                <Form>

                  <Jumbotron className="bg-dark text-white text-center navPadding">
                       <h1>Welcome To Vehicle Park world!</h1>
                      <Form.Group>
                          <Link to="add"><Button size="lg" variant="outline-primary" > Park Your Vehicle </Button>{' '}</Link>

                      </Form.Group>

                      <Form.Group>
                          <Link to="list">  <Button size="lg" variant="outline-success"> Display Parking List </Button>{' '}</Link>
                      </Form.Group>

                     <Form.Group>

                         <Link to="unadd"><Button size="lg" variant="outline-danger" > UnPark Your Vehicle </Button>{' '}</Link>
                     </Form.Group>
                      <Form.Group>
                          <Link to="cust">  <Button size="lg" variant="outline-info"> Display Customer List </Button>{' '}</Link>
                      </Form.Group>

                  </Jumbotron>
               </Form>
                 </div>
        );

    }
}