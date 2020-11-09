import React,{Component} from "react";
import {Card, Table,ButtonGroup,Button} from 'react-bootstrap';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faList, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class ParkingList extends Component{
    constructor(props) {
        super(props);
        this.state={
            parkingListFromDatabase:[]
        }

    }
    componentDidMount() {
        axios.get("http://localhost:7000/parking")
            .then(response => response.data)
            .then((data)=>{
                this.setState({parkingListFromDatabase:data});

            });


    }
    render() {

        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> PARKING LIST</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Row</th>
                            <th>Car</th>
                            <th>Bike</th>
                            <th>Van</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.parkingListFromDatabase.length===0?
                            <tr align="center">
                                <td colSpan="6">No Details available</td>
                            </tr>:
                            this.state.parkingListFromDatabase.map(parkingListFromDatabase=>(
                                <tr key={parkingListFromDatabase.id}>
                                    <td>{parkingListFromDatabase.id}</td>
                                    <td>{parkingListFromDatabase.car===0?"Empty":"Car Parked"}</td>
                                    <td>{parkingListFromDatabase.bike===0?"Empty":"Bike Parked"}</td>
                                    <td>{parkingListFromDatabase.vane===0?"Empty":"Van Parked"}</td>
                                </tr>
                            ))
                         }
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
