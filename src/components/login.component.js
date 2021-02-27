import React, { Component } from "react";
import {  Route, Link ,Switch} from "react-router-dom";
import {SignUp} from "./signup.component";


export default class Login extends Component {
    render() {
        return (
            <div>
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="username...." name="username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a><Link to="/sign-up"> Create an Account</Link>
                </p>
            </form>
            <Switch><Route exact path='/sign-up' component={SignUp} /></Switch>
           
            </div>
        );
    }
}
export {Login};