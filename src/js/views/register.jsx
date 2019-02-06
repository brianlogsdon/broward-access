import React from "react";
import Navbar from "../components/navbar.jsx";
import { Link } from "react-router-dom";

class Register extends React.Component {
	render() {
		return (
    <div className="container-fluid mx-auto">
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
                        <input type="email" className="form-control" id="emailInput" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Confirm password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Retype Password"/>
                    </div>
                </form>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary mr-1">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
		);
	}
}

export default Register;