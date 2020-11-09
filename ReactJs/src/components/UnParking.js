import React,{Component} from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

//import from "react-bootstrap";
export default class UnParking extends Component {
    getRow=0;
    getVehicleNo=0;
    flag=0;
    constructor(props) {
        super(props);
        this.state = {enteredVehicleName:"",enteredVehicleNo:''};
        this.state={
            parkingListFromDatabase:[]
        }
        this.state={
            customerDetailFromDatabase:[]
        }
        this.state = {
            enteredVehicleType:1
        }
    }
    //get the value from database
    componentDidMount() {
        axios.get("http://localhost:7000/parking")
            .then(response => response.data)
            .then((data) => {
                this.setState({parkingListFromDatabase: data});
            });
        axios.get("http://localhost:7000/info")
            .then(response => response.data)
            .then((data)=>{
                this.setState({customerDetailFromDatabase:data});
            });
    }

    submitDetails=event=> {
        const book = {
            id:0,
            car:0,
            bike:0,
            vane:0
        };
        this.getRow=0;
        this.flag=0;
        this.getVehicleNo=0;
        //alert(this.state.name+" "+this.state.vehicle+" "+this.state.no);
        //validation process name,vehicleNo,vehicleType
        for (const [index, value] of this.state.customerDetailFromDatabase.entries()) {
            //alert(value.vehicleNo+" "+value.name+" "+value.id+" "+value.vehicle);
            if (this.state.enteredVehicleNo== value.vehicleNo && this.state.enteredVehicleName === value.name && this.state.enteredVehicleType == value.vehicle) {
                this.getRow=value.id;
                this.getVehicleNo=value.vehicleNo;
            }
        }
           //update process in parking database empty the vehicle
        for (const [index, value] of this.state.parkingListFromDatabase.entries()) {
                book.id = value.id;
                book.car = value.car;
                book.bike = value.bike;
                book.vane = value.vane;
                if (this.getRow== value.id) {
                    if (this.state.enteredVehicleType == 1 && value.car == 1) {
                        book.car = 0;
                        this.flag = 1;break;
                    }
                    if (this.state.enteredVehicleType == 2 && value.bike == 1) {
                        book.bike = 0;
                        this.flag = 1;break;
                    }
                    if (this.state.enteredVehicleType== 3 && value.vane == 1) {
                        book.vane = 0;
                        this.flag = 1;break;
                    }
                }
        }
        const names = {1: "Car", 2: "Bike", 3: "Van"};
        //delete customer details process
        axios.delete("http://localhost:7000/info/"+this.getVehicleNo)
        //update the parking database
        axios.post("http://localhost:7000/parking", book).then(response =>{

        });
        //alert
        if (this.flag == 1) {
            alert(" Successfully Your " + names[this.state.enteredVehicleType] + " UnParked \n Row : " + book.id + "\n Your Name : " + this.state.enteredVehicleName + "\n Your " + names[this.state.enteredVehicleType] + " No : " + this.state.enteredVehicleNo);
        }
        else {
            alert("Enter Correct Value");
        }
    }
    detailChange=event=> {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);
    }
    render() {
        return (

            <Card className={"border border-blue bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> UnPark</Card.Header>

                <Form onSubmit={this.submitDetails} id="bookFormId">
                    <Card.Body >

                        <Form.Group as={Col} controlId="fromGridId">
                            <Form.Label>Enter YourName</Form.Label>
                            <Form.Control required autoComplete="off"
                                          size="lg"
                                          type="text" name="enteredVehicleName"
                                          value={this.state.enteredVehicleName}
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
                        <Button size="lg" variant="danger " type="submit">
                            <FontAwesomeIcon icon={faSave} />Submit
                        </Button>{'  '}
                        <Button size="lg" variant="success " type="reset">
                            <FontAwesomeIcon icon={faUndo} />Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>

        );
    }
}