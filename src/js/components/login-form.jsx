import React from "react";

class LoginForm extends React.Component {
	render() {
		return (
    <form>
        <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
						type="text"
						className="form-control"
						id="usernameInput"
						placeholder="Enter username"
					/>
        </div>
        <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
						type="password"
						className="form-control"
						id="passwordInput"
						placeholder="Password"
					/>
        </div>
    </form>
		);
	}
}

export default LoginForm;
