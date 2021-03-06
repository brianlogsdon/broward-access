import React from "react";
import Navbar from "../components/navbar.jsx";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

class Profile extends React.Component {
	render() {
return (
    <div>
        <Navbar />
        
        <Context.Consumer>
            {({ store, actions }) => {
                if(store.loggedin.length<1){
return(
    <div className="container">
        <h3 className="display-4">Please Log in or create an account to view your profile</h3>
    </div>
);}
else{
return(
    <div>
        <div className="container">
            <ul
						className="nav nav-pills  mb-3 m-2 justify-content-center"
						id="pills-tab"
						role="tablist">
                <li className="nav-item">
                    <a
								className="nav-link  active"
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
                
                <table className="table table-striped">
                
                    <thead>
                    
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Info</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <Context.Consumer>
                            {({ store }) => {
                            let userSaved=store.loggedin.profile.saved_locations;
                            window.console.log(userSaved);
                            let savedLocations =[]; 
                            for(let i=0; i<userSaved.length; i++){
                            let foundLocations=store.markers.find(item=>item.id ===userSaved[i]);
                            savedLocations.push(foundLocations);
                            }
                            
                    return(savedLocations.map((item, index)=>
                        <tr key ={index}>
                            <th scope="row"><img src={item.icon} alt=""></img></th>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.info}</td>
                        </tr>
                        
                      ));
                            }}</Context.Consumer>
                    </tbody>
                </table>
               
            </div>
            <div
						className="tab-pane fade"
						id="pills-added"
						role="tabpanel"
						aria-labelledby="pills-added-tab">
				
                <table className="table table-striped">
                
                    <thead>
                    
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Info</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <Context.Consumer>
                            {({ store }) => {
                            let userID=store.loggedin.id;
                            window.console.log(userID);
                            let foundLocations =[]; 
                            for(let i=0; i<store.markers.length; i++){
                            if (store.markers[i].creator == userID){
                                foundLocations.push(store.markers[i]);
                            }}
                            
                    return(foundLocations.map((item, index)=>
                        <tr key ={index}>
                            <th scope="row"><img src={item.icon} alt=""></img></th>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.info}</td>
                        </tr>
                        
                      ));
                            }}</Context.Consumer>
                    </tbody>
                </table>		
            </div>
        </div>
    </div>
               );
             }}
							
						}
        </Context.Consumer>
    </div>
		);
	}
}

export default withRouter(Profile);
