import React,{Component} from "react";
import {Card, Table,ButtonGroup,Button} from 'react-bootstrap';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faList, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class Customer extends Component{
count=1;
    constructor(props) {
        super(props);
        this.state={
            customer:[]
        }


    }
    componentDidMount() {
        axios.get("http://localhost:7000/info")
            .then(response => response.data)
            .then((data)=>{
                this.setState({customer:data});

            });


    }
    render() {
        const names={1:"Car",2:"Bike",3:"Van",count:0};
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} />CUSTOMER LIST</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Vehicle</th>
                            <th>Vehicle No</th>
                            <th>Row</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.customer.length===0?
                                <tr align="center">
                                    <td colSpan="6">No Details available</td>
                                </tr>:
                                this.state.customer.map(customer =>(
                                    <tr key={customer.vehicleNo}>
                                        <td>{this.count++}</td>
                                        <td>{customer.name}</td>
                                        <td>{names[customer.vehicle]}</td>
                                        <td>{customer.vehicleNo}</td>
                                        <td>{customer.id}</td>
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
