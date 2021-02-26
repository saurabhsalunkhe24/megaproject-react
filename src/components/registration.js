import React from 'react';
import './register.css';
function Registration() {

    return(
        <>
        <div id="register" className="container-fluid d-flex flex-column justify-content-center align-item-center ">
         
        <form action="" style={{backgroundColor:"white",height:"50%",width:"25%",marginLeft:"auto",marginRight:"auto"}} className="" >
        <h1 >Register Here</h1>           
          <div className>              
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username"  placeholder="username..."></input>
          </div>
          <div>              
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password"  placeholder="****"></input>
          </div>
          <div>              
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstname"  placeholder="firstName..."></input>
          </div>
          <div>              
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName"  placeholder="lastName..."></input>
          </div>
          <div>              
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email"  placeholder="sample@sample.com..."></input>
          </div>
          <div>              
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone"  placeholder="123...."></input>
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
              <input type="submit" value="Register"></input>
          </div>
        </form>
        </div>      
     </>
       
    );
}
export default Registration;