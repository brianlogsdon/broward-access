import React from "react";

class ResourceList extends React.Component {
	render() {
		return (
    <div>
        <h3>Quick Resource Links</h3>
	
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-warning">Broward County Homeless Guide</li>
                <li className="list-group-item list-group-item-warning">Hollywood Homless Reference Guide</li>
                <li className="list-group-item list-group-item-warning">How to get an ID card</li>
                <li className="list-group-item list-group-item-warning">Staying Safe</li>
                <li className="list-group-item list-group-item-warning">Hurricane Prep. Guide</li>
            </ul>
        </div>
    </div>
		);
	}
}

export default ResourceList;
