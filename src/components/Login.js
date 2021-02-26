import React from 'react';
import './register.css';
function Login() {

    return(
        <>
        <div id="register" className="container-fluid d-flex flex-column justify-content-center align-item-center ">
         
            <form action="" style={{backgroundColor:"white",height:"50%",width:"25%",marginLeft:"auto",marginRight:"auto"}} className="" >
            <h1 >Login Here</h1>           
            <div className>              
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"  placeholder="username..."></input>
            </div>
            <div>              
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="****"></input>
            </div>
            
            <div>              
                <label htmlFor="userRole">User Role</label>
                <select>
                    <option>Admin</option>
                    <option>Supplier</option>
                    <option>Customer</option>
                </select>
            </div>
            <div>              
                <input type="submit" value="Login"></input>
            </div>
            </form>
            <a href="./registration.js">Create an account</a>
            </div>       
        
        </>
       
    );
}
export default Login;