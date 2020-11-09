import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Container, Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Parking from "./components/Parking";
import ParkingList from "./components/ParkingList";
import UnParking from "./components/UnParking";
import Customer from "./components/Customer";
function App() {
     const marginTop={
         marginTop:"20px"
     };
  return (
    <Router>
         <NavigationBar/>
       <Container>
           <Row>

                   <Col lg={12} style={marginTop}>
                       <Switch>
                           <Route path="/" exact component={Welcome}/>
                           <Route path="/add" exact component={Parking}/>
                           <Route path="/unadd" exact component={UnParking}/>
                           <Route path="/list" exact component={ParkingList}/>
                           <Route path="/cust" exact component={Customer}/>
                       </Switch>
                   </Col>
           </Row>
       </Container>
      <Footer/>

    </Router>
  );
}

export default App;
