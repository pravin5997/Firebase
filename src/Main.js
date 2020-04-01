import React, { Component } from 'react'
import Login from './Login';
import SignUp from './Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Main extends Component {
    
    render() {
        return (
            
                <Router>
                    <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}><b>Leave Request</b></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li> */}
                            </ul>
                        </div>
                        </div>
                    </nav>
                   

                    <div className="auth-wrapper">
                        <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                        </Switch>
                        </div>
                    </div>
                    </div>
                </Router>
            
        )
    }
}
