import React, { Component } from 'react'
import fire from './config/Fire'
import {Dropdown,DropdownButton, Button, Form,FormGroup,FormLabel} from 'react-bootstrap'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            leaveType: ""
        }
    }
   
    logOutHandle = () =>{
        fire.auth().signOut();
    }
    render() {
        return (
            <div className="container" style = {{marginTop:"50px",backgroundColor:"#717b8b7d"}}>
                <Form>
                <h3>Leave Form</h3>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>---Select---</option>   
                    <option>Vacation leave</option>
                    <option>Sick Leave or Medical Leave</option>
                    <option>Casual Leave</option>
                    <option>Maternity Leave</option>
                    <option>Earned Leave or Privilege Leave</option>
                    <option>Quarantine Leave</option>
                    <option>Study Leave or Sabbatical Leave</option>
                    <option>Half Pay Leave</option>
                    </Form.Control>
                </Form.Group>
                <FormGroup>
                    <FormLabel>Leave Description</FormLabel>
                    <textarea onChange={this.onChangeHandel} value={this.state.lastName} name="leaveDecs" id="leaveDecs" className="form-control" placeholder="Description" />
                </FormGroup>


            </Form>
                <Button onClick ={this.logOutHandle} >SignOut</Button>
            </div>
        )
    }
}
