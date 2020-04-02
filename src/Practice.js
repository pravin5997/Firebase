import React, { Component } from 'react'
import fire from './config/Fire'
import { waitForDomChange } from '@testing-library/react';

export default class Practice extends Component {
    constructor(props){
        super(props)
        this.state ={
            userData:[]
            
        }
    }

    componentDidMount () {
        const userDataref = fire.database().ref("userData");
        userDataref.on("value", (snapshot)=>{
            let userData = snapshot.val();
            console.log(userData)
            let myUserData = [];
            for (let myData in userData)
            {
                myUserData.push({
                    id:myData,
                    firstName:userData[myData].firstName,
                    lastName:userData[myData].lastName,
                    emailId:userData[myData].email,
                    password:userData[myData].password
                });
            }
            this.setState({
                userData:myUserData
            });
        });

    }

    render() {
        console.log(this.state.userData)
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}
