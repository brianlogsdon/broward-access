import React from "react";
import Navbar from "../components/navbar.jsx";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {
	render() {
return (
    <div>
        <Navbar />
        <div className="container">
            <ul
						className="nav nav-pills mb-3 m-2 justify-content-center"
						id="pills-tab"
						role="tablist">
                <li className="nav-item">
                    <a
								className="nav-link active"
								id="pills-saved-tab"
								data-toggle="pill"
								href="#pills-saved"
								role="tab"
								aria-controls="pills-saved"
								aria-selected="true">
								Saved Locations
                    </a>
                </li>
                <li className="nav-item">
                    <a
								className="nav-link"
								id="pills-added-tab"
								data-toggle="pill"
								href="#pills-added"
								role="tab"
								aria-controls="pills-added"
								aria-selected="false">
								Locations Ive Added
                    </a>
                </li>
            </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div
						className="tab-pane fade show active"
						id="pills-saved"
						role="tabpanel"
						aria-labelledby="pills-saved-tab">
						Some Locations I have saved
            </div>
            <div
						className="tab-pane fade"
						id="pills-added"
						role="tabpanel"
						aria-labelledby="pills-added-tab">
						Some locations I have added
            </div>
        </div>
    </div>
		);
	}
}

export default withRouter(Profile);
