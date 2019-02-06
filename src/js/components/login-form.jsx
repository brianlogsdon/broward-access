import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
	render() {
		return (
    <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0">
            <form>
                <div className="form-group">
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" className="form-control" id="usernameInput" placeholder="Enter username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
                </div>
            </form>
        </div>
        <hr />
        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-primary mr-1">
					Log in
                </button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
					Cancel
                </button>
            </div>
            <div className="col text-right">
                <Link className="nav-link text-muted" to="/register">
					Create Account
                </Link>
            </div>
        </div>
    </div>
		);
	}
}

export default LoginForm;