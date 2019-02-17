import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
	render() {
		return (
    <Context.Consumer>
            
            
            
        {({ actions,store }) => {
            
            
return(
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
                <button onClick={()=>{actions.login(document.querySelector("#usernameInput").value,
                                    document.querySelector("#passwordInput").value, this.props); }}
                                    data-dismiss="modal" type="button" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
					Cancel
                </button>
            </div>
            <div className="col text-right">
                <Link className="nav-link text-muted" to="/register" onClick="$('.modal').modal('hide')">
					Create Account
                </Link>
            </div>
        </div>
    </div>
    
     );
                            }}</Context.Consumer>
    
		);
	}
}
LoginForm.propTypes = {
    history: PropTypes.object,
    
    show: PropTypes.bool,
    match: PropTypes.object
};
export default withRouter(LoginForm);