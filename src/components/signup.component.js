import React, { Component } from "react";
import {  Route, Link ,Switch} from "react-router-dom";
import {Login} from "./login.component";

export default class SignUp extends Component {
    render() {
        return (
            <div>
            <form >
                <h3>Register</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Ussername..." name="username" />
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstName"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastName"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone number"  name="phone"/>
                </div>
                <div className="form-group">
                    <label>User Role</label>
                        <select className="form-control">
                            <option>Admin</option>
                            <option>Supplier</option>
                            <option>Customer</option>
                        </select>
                    
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/" >log in?</Link>
                </p>
                
            </form>
             <Switch><Route exact path='/' component={Login} /></Switch>
             </div>
            
        );
    }
}
export {SignUp};