import React from "react";
import Navbar from "../components/navbar.jsx";
import LoginForm from "../components/login-form.jsx";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class Login extends React.Component {
	render() {
		return (
    <div >
        <Navbar />
        <div className="row">
            <div className="jumbotron mx-auto my-4">
                <h1 className="display-4">Log in</h1>
                <p className="lead">
							to tag new locations and see your saved locations
                </p>
                <hr className="my-4" />
                <LoginForm />
            </div>
        </div>
    </div>
		);
	}
}
Login.propTypes = {
    history: PropTypes.object
    
};
export default withRouter(Login);
