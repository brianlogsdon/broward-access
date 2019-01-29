import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Footer extends Component {
	render() {
		return (
    <footer className="page-footer font-small blue .bg-dark footer">
        <div className="footer-copyright text-center py-3">
					
            <h6 className="text-center">
						© Broward Access 2019
            </h6>
        </div>
    </footer>
		);
	}
}
