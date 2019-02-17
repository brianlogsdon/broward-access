import React from "react";
import Navbar from "../components/navbar.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";


class Register extends React.Component {
	render() {
		return (
    <Context.Consumer>
            
            
            
        {({ actions,store }) => {
            
            
return(
    <div >
        <Navbar />
        <div className="row">
            <div className="jumbotron mx-auto my-4">
                <h1 className="display-4">Create Account</h1>
                <p className="lead">
							to tag new locations or save specific locations
                </p>
                <hr className="my-4" />
                <form>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input id="email" type="email" className="form-control"  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input id="username" type="text" className="form-control" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input id="password" type="password" className="form-control"  placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Confirm password</label>
                        <input type="password" className="form-control" placeholder="Retype Password"/>
                    </div>
                </form>
                <div className="row">
                    <div className="col">
                        <button onClick={()=>{actions.newUser(document.querySelector("#username").value,
                                    document.querySelector("#email").value,document.querySelector("#password").value, this.props); }}
                                    type="button" className="btn btn-primary">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
                            }}</Context.Consumer>
    
    
    
		);
	}
}

export default Register;