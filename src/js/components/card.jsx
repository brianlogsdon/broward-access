import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Card = props => {
	return (
    <div className="col-lg-3 col-sm-6 mb-2 mx-auto">
        <div className="card cardStyle">
            <img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
					width="320" height="250"
				/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to={props.link} className="btn btn-secondary nav-link">
                    {props.button}
                </Link>
            </div>
        </div>
    </div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
	image: PropTypes.string,
	link:PropTypes.string
};

export default Card;
