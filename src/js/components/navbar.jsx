import React from "react";
import LoginForm from "./login-form.jsx";
import { Link } from "react-router-dom";
import  logo  from "../../img/BrowardAccess.png";

//create your first component
const Navbar = () => {
	return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark"  >
            <Link className="navbar-brand" to="/home">
                <img className="" src={logo} width="150" height="75" alt="First slide"></img>
            </Link>
            
            <button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            
            <div
					className="collapse navbar-collapse  ml-auto"
					id="navbarNav">
                <ul className="nav navbar-nav navbar-right ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/map">
								Resource Map
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
								Profile
                        </Link>
                    </li>
                </ul>
            </div>
            <button
					className="btn btn-secondary my-2 my-sm0"
					data-toggle="modal"
					data-target="#loginModal">
					Log In
            </button>
            <div
					className="modal fade"
					id="loginModal"
					tabIndex="-1"
					role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Log in</h5>
                            <button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
	);
};

export default Navbar;
