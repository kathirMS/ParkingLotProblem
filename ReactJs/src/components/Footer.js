import React from "react";
import {Col, Container, Navbar} from 'react-bootstrap'
class Footer extends React.Component{
    render() {
        let date1=new Date().getFullYear();
        return( <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                    <div>
                        {date1}All Right This is Kathir
                    </div>
                </Col>
            </Container>
            </Navbar>
            );
    }
}
export default Footer;