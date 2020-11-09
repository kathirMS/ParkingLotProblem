import React,{Component} from "react";
import axios from 'axios';
import {Card, Form, Button, Col} from 'react-bootstrap'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons'
//Parking process class
export default class Parking extends Component{
    flag=0;
    constructor(props) {
        super(props);
        this.state={enteredName:'',enteredVehicleNo:''};
        this.state={
            parkingListFromDatabase:[]
        }
        this.state={
            customerDetailsFromDatabase:[]
        }
        this.state = {
            enteredVehicleType:1
        }
        this.detailChange=this.detailChange.bind(this);
        this.submitDetails=this.submitDetails.bind(this);
    }
    //get the value From Database
    componentDidMount() {
        axios.get("http://localhost:7000/parking")
            .then(response => response.data)
            .then((data)=>{
                this.setState({parkingListFromDatabase:data});

            });
        axios.get("http://localhost:7000/info")
            .then(response => response.data)
            .then((data)=>{
                this.setState({customerDetailsFromDatabase:data});
            });
    }
    submitDetails=event=> {
        this.flag=0;
        console.log(this.state.enteredVehicleType);
        event.preventDefault();
        const newUpdateCustomerDetails={
            vehicleNo:0,
            name:"",
            id:0,
            vehicle:0
        };
        const newUpdateParkingDetails = {
            id:0,
            car:0,
            bike:0,
            vane:0
        };
        //validate the Vehicle number from CustomerDetail database
        for (const [index, value] of this.state.customerDetailsFromDatabase.entries()) {
            if(value.vehicleNo == this.state.enteredVehicleNo) {
                alert("Already There Vehicle No");this.flag=2;
            }
        }
        if(this.flag!= 2) {
               console.log(this.state.enteredName+" "+this.state.enteredVehicleNo+" "+this.state.enteredVehicleType);
               for (const [index, value] of this.state.parkingListFromDatabase.entries()) {
                   newUpdateParkingDetails.id = value.id;
                   newUpdateCustomerDetails.id=value.id;
                   newUpdateParkingDetails.car = value.car;
                   newUpdateParkingDetails.bike = value.bike;
                   newUpdateParkingDetails.vane = value.vane;
                    if (value.car == 0 && this.state.enteredVehicleType == 1) {
                        newUpdateParkingDetails.car = 1;
                           console.log("hai");
                           console.log(value.id + "this first occured " + this.state.enteredVehicleType);
                           this.flag = 1;
                           break;

                    } else if (value.bike == 0 && this.state.enteredVehicleType == 2) {
                        newUpdateParkingDetails.bike = 1;
                           console.log(value.id + "this first occured " + this.state.enteredVehicleType);
                           this.flag = 1;
                           break;
                    } else if (value.vane == 0 && this.state.enteredVehicleType == 3) {
                        newUpdateParkingDetails.vane = 1;
                           console.log(value.id + "this first occured " + this.state.enteredVehicleType);
                           this.flag = 1;
                           break;
                    }

               }
               newUpdateCustomerDetails.vehicleNo=this.state.enteredVehicleNo;
               newUpdateCustomerDetails.name=this.state.enteredName;
               newUpdateCustomerDetails.vehicle=this.state.enteredVehicleType;
               //create new Row in Parking database
               if(this.flag == 0) {
                     newUpdateCustomerDetails.id=newUpdateCustomerDetails.id+1;
                     newUpdateParkingDetails.id=0;newUpdateParkingDetails.bike=0;newUpdateParkingDetails.car=0;newUpdateParkingDetails.vane=0;
                     if (this.state.enteredVehicleType == 1){
                            newUpdateParkingDetails.car=1;
                     }
                     if(this.state.enteredVehicleType == 2){
                            newUpdateParkingDetails.bike=1;
                     }
                     if(this.state.enteredVehicleType== 3){
                            newUpdateParkingDetails.vane=1;
                     }
               }
               //update parking details database
               axios.post("http://localhost:7000/parking",newUpdateParkingDetails).then(response => {

               });

               //update customer detail database
               const names = {1: "Car", 2: "Bike", 3: "Van"};
               axios.post("http://localhost:7000/info", newUpdateCustomerDetails).then(response => {
                     alert(" Successfully Your " + names[this.state.enteredVehicleType] + " Parked \n Row : " + newUpdateCustomerDetails.id + "\n Your Name : " + newUpdateCustomerDetails.name + "\n Your " + names[this.state.enteredVehicleType] + " No : " + newUpdateCustomerDetails.vehicleNo);
                     window.location.reload(false);
               });
        }
    }
    detailChange=event=> {
         this.setState({[event.target.name]: event.target.value});
         console.log(event.target.value);
    }
    render() {
        return(
          <Card className={"border border-dark bg-dark text-white"}>
              <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Enter Your Details </Card.Header>

                  <Form onSubmit={this.submitDetails} id="bookFormId">
                      <Card.Body >

                            <Form.Group as={Col} controlId="fromGridId">
                                <Form.Label>Enter YourName</Form.Label>
                                <Form.Control required autoComplete="off"
                                              size="lg"
                                    type="text" name="enteredName"
                                    value={this.state.enteredName}
                                    onChange={this.detailChange}
                                    className={"bg-dark text-white"}
                                     placeholder="Enter Name" />
                            </Form.Group>

                          <Form.Group as={Col} controlId="fromGridId">
                              <Form.Label>Enter Vehicle No</Form.Label>
                              <Form.Control required autoComplete="off"
                                            size="lg"
                                            type="text" name="enteredVehicleNo"
                                            value={this.state.enteredVehicleNo}
                                            onChange={this.detailChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Enter Vehicle No" />
                          </Form.Group>
                          <Form.Row >
                            <Form.Group  >
                                <Form.Label>Type Of Vehicle</Form.Label>
                                <Form.Control as="select" size="lg" required autoComplete="off"
                                              type="Name"
                                              name="enteredVehicleType"
                                              value={this.state.enteredVehicleType}
                                              onChange={this.detailChange}
                                              defaultValue={this.state.value}
                                              custom className="border border-white bg-dark text-white">
                                    <option value="1">Car</option>
                                    <option value="2">Bike</option>
                                    <option value="3">Van</option>
                                </Form.Control>
                            </Form.Group>

                          </Form.Row>
                      </Card.Body>
                             <Card.Footer style={{"textAlign":"right"}}>
                                <Button size="lg" variant="success" type="submit">
                                    <FontAwesomeIcon  icon={faSave} />Submit
                                </Button>{'  '}
                                 <Button size="lg" variant="info " type="reset" >
                                     <FontAwesomeIcon  icon={faUndo} />Reset
                                 </Button>
                             </Card.Footer>

                  </Form>
          </Card>
        );
    }
}
